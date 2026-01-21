'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { BookOpen, Calendar, History, LogOut, Mail, User } from 'lucide-react';
import { signout } from '@/app/login/actions';
import { Separator } from '@/components/ui/separator';

interface DashboardClientProps {
    user: {
        email?: string;
        user_metadata: {
            full_name?: string;
        };
    } | null;
}

export default function DashboardClient({ user }: DashboardClientProps) {
    const { t } = useLanguage();

    const benefits = [
        {
            title: "Digital Library Access",
            description: "Exclusive access to sutras, magazines, and historical documents.",
            icon: <BookOpen className="h-6 w-6 text-primary" />,
        },
        {
            title: "Event Priority",
            description: "Early registration access for retreats and special ceremonies.",
            icon: <Calendar className="h-6 w-6 text-primary" />,
        },
        {
            title: "Donation History",
            description: "View and download receipts for your past contributions.",
            icon: <History className="h-6 w-6 text-primary" />,
        },
        {
            title: "Member Newsletter",
            description: "Receive monthly updates on mission activities and community news.",
            icon: <Mail className="h-6 w-6 text-primary" />,
        },
    ];

    return (
        <div className="flex min-h-[calc(100vh-10rem)] bg-background p-4 md:p-8 justify-center">
            <div className="w-full max-w-4xl space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-headline font-bold">{t('dashboardPage.title')}</h1>
                        <p className="text-muted-foreground">
                            Welcome back, {user?.user_metadata?.full_name || user?.email || 'Member'}!
                        </p>
                    </div>
                    <form action={signout}>
                        <Button variant="outline" type="submit">
                            <LogOut className="mr-2 h-4 w-4" />
                            Log Out
                        </Button>
                    </form>
                </div>

                <Separator />

                <section>
                    <h2 className="text-2xl font-bold mb-6">Your Member Benefits</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="transition-all hover:shadow-md">
                                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold">
                                        {benefit.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base mt-2">
                                        {benefit.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
