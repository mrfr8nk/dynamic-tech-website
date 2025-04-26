
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiEdit, FiSave } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/AuthContext';
import { logout } from '@/services/auth';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  // If user is not logged in, redirect to login page
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically update the user profile via an API call
    // For this demo, we'll just show a success message
    toast.success('Profile updated successfully');
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    toast.info('You have been logged out');
    navigate('/');
  };

  if (!user) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-64px-300px)] px-4 mx-auto">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="mb-4">Please log in to access your profile</p>
            <Button asChild>
              <a href="/login">Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">My Profile</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Profile Information</span>
                    {!isEditing ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsEditing(true)}
                      >
                        <FiEdit className="mr-2" /> Edit
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center md:col-span-1">
                      <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
                        {user.avatar ? (
                          <img 
                            src={user.avatar} 
                            alt={user.name} 
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-muted">
                            <FiUser className="w-16 h-16 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          Change Photo
                        </Button>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      {isEditing ? (
                        <form onSubmit={handleSaveProfile} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={profileData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={profileData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          
                          <Button type="submit">
                            <FiSave className="mr-2" /> Save Changes
                          </Button>
                        </form>
                      ) : (
                        <dl className="space-y-4">
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Name</dt>
                            <dd className="text-lg">{user.name}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                            <dd className="text-lg">{user.email}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-muted-foreground">User ID</dt>
                            <dd className="text-lg">{user.id}</dd>
                          </div>
                        </dl>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-right">
                <Button variant="destructive" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Change Password</h3>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input
                            id="currentPassword"
                            name="currentPassword"
                            type="password"
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                          />
                        </div>
                        <Button type="submit">Change Password</Button>
                      </form>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="mb-4 text-lg font-medium">Two-Factor Authentication</h3>
                      <p className="mb-4 text-muted-foreground">
                        Add an extra layer of security to your account by enabling two-factor authentication.
                      </p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Account Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Project updates</span>
                          <input type="checkbox" defaultChecked className="switch" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Newsletter</span>
                          <input type="checkbox" defaultChecked className="switch" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>New services announcements</span>
                          <input type="checkbox" className="switch" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="mb-4 text-lg font-medium">Language</h3>
                      <select className="w-full p-2 border rounded">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
