import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Activity,
  BarChart as ChartBar,
  MessageSquare,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const activities = [
    { id: 1, type: 'service', title: 'Web Development Consultation', status: 'In Progress', date: '2025-04-20' },
    { id: 2, type: 'blog', title: 'Introduction to React', action: 'Commented', date: '2025-04-19' },
    { id: 3, type: 'service', title: 'UI/UX Design Package', status: 'Completed', date: '2025-04-18' },
  ];

  const comments = [
    { id: 1, blogTitle: 'Modern Web Development', comment: 'Great article!', date: '2025-04-20' },
    { id: 2, blogTitle: 'UI/UX Best Practices', comment: 'Very informative content.', date: '2025-04-19' },
  ];

  const ratings = [
    { id: 1, serviceTitle: 'Web Development', rating: 5, date: '2025-04-20' },
    { id: 2, serviceTitle: 'UI/UX Design', rating: 4, date: '2025-04-19' },
  ];

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert>
          <AlertDescription>
            Please log in to view your dashboard.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, {user.name}</h1>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                <ChartBar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activities.filter(a => a.type === 'service').length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Comments</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{comments.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Ratings Given</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{ratings.length}</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Applied Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                {activities
                  .filter(activity => activity.type === 'service')
                  .map(service => (
                    <div key={service.id} className="flex items-center justify-between py-4 border-b last:border-0">
                      <div>
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                {activities.map(activity => (
                  <div key={activity.id} className="flex items-center space-x-4 py-4 border-b last:border-0">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactions">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {comments.map(comment => (
                    <div key={comment.id} className="py-4 border-b last:border-0">
                      <h3 className="font-medium">{comment.blogTitle}</h3>
                      <p className="text-sm text-muted-foreground my-1">{comment.comment}</p>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ratings</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {ratings.map(rating => (
                    <div key={rating.id} className="flex items-center justify-between py-4 border-b last:border-0">
                      <div>
                        <h3 className="font-medium">{rating.serviceTitle}</h3>
                        <p className="text-xs text-muted-foreground">{rating.date}</p>
                      </div>
                      <div className="flex items-center">
                        {Array.from({ length: rating.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
