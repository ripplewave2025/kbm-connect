-- Create a table for public profiles using Supabase Auth
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  membership_level text default 'standard',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table profiles enable row level security;

-- Create Policy: Users can view their own profile
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);

-- Create Policy: Users can update their own profile
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
