import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { 
  FiArrowLeft, 
  FiTwitter, 
  FiFacebook, 
  FiLinkedin, 
  FiCopy,
  FiShare2
} from 'react-icons/fi';
import { 
  BsCheckLg,
  BsWhatsapp,
  BsReddit,
  BsTelegram,
  BsTiktok,
  BsInstagram
} from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import blogData from '@/services/blogs.json';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [codeBlocks, setCodeBlocks] = useState<string[]>([]);
  const [typedContent, setTypedContent] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const blog = blogData.find(b => b.id === id);
  
  useEffect(() => {
    if (blog) {
      let i = 0;
      const typingSpeed = 10; // Adjust speed here (lower is faster)
      const typeWriter = () => {
        if (i < blog.content.length) {
          setTypedContent(blog.content.substring(0, i + 1));
          i++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          setIsTypingComplete(true);
        }
      };
      typeWriter();
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="container px-4 py-12 mx-auto text-center md:py-16">
        <h1 className="mb-4 text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mb-8 text-muted-foreground">The blog post you're looking for doesn't seem to exist.</p>
        <Button asChild>
          <Link to="/blogs">Back to Blogs</Link>
        </Button>
      </div>
    );
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const components = {
    code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) {
      const match = /language-(\w+)/.exec(className || '');
      const codeText = String(children).replace(/\n$/, '');
      const codeIndex = codeBlocks.indexOf(codeText);
      const index = codeIndex === -1 ? codeBlocks.push(codeText) - 1 : codeIndex;

      return !inline && match ? (
        <div className="relative my-6">
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language={match[1]}
              style={atomDark}
              showLineNumbers={match[1] !== 'bash'}
              customStyle={{
                background: '#1E293B',
                borderRadius: '0.5rem',
                padding: '1rem',
                fontSize: '0.875rem',
                margin: 0,
                minWidth: '100%',
                width: 'fit-content'
              }}
              {...props}
            >
              {codeText}
            </SyntaxHighlighter>
          </div>
          <button
            onClick={() => copyToClipboard(codeText, index)}
            className="absolute top-2 right-2 p-2 rounded bg-gray-700 hover:bg-gray-600 transition"
            aria-label="Copy code"
          >
            {copiedIndex === index ? (
              <BsCheckLg className="text-green-400" />
            ) : (
              <FiCopy className="text-gray-300" />
            )}
          </button>
        </div>
      ) : (
        <code className="px-2 py-1 text-sm rounded bg-muted/50 font-mono">
          {children}
        </code>
      );
    },
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-2xl font-bold mt-6 mb-4 border-b pb-2 sm:text-3xl" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="text-xl font-bold mt-6 mb-4 border-b pb-2 sm:text-2xl" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-lg font-bold mt-4 mb-2 sm:text-xl" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="list-decimal pl-5 mb-4 space-y-2" {...props} />
    ),
    li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
      <li className="mb-1" {...props} />
    ),
    blockquote: (props: React.BlockquoteHTMLAttributes<HTMLElement>) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...props} />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <div className="my-4 overflow-hidden rounded-lg">
        <img 
          className="w-full h-auto max-w-full" 
          style={{ maxWidth: '100%', height: 'auto' }}
          {...props} 
        />
      </div>
    ),
    table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse" {...props} />
      </div>
    ),
    th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
      <th className="border p-2 text-left bg-muted/50 text-sm sm:text-base" {...props} />
    ),
    td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
      <td className="border p-2 text-sm sm:text-base" {...props} />
    ),
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(blog.title);
  const relatedBlogs = blogData.filter(b => b.id !== blog.id).slice(0, 3);

  const shareButtons = [
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`
    },
    {
      name: 'Facebook',
      icon: <FiFacebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`
    },
    {
      name: 'WhatsApp',
      icon: <BsWhatsapp />,
      url: `https://wa.me/?text=${shareTitle}%20${shareUrl}`
    },
    {
      name: 'Reddit',
      icon: <BsReddit />,
      url: `https://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`
    },
    {
      name: 'Telegram',
      icon: <BsTelegram />,
      url: `https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`
    },
    {
      name: 'Instagram',
      icon: <BsInstagram />,
      url: `https://instagram.com`
    },
    {
      name: 'TikTok',
      icon: <BsTiktok />,
      url: `https://www.tiktok.com`
    }
  ];

  return (
    <div className="container px-4 py-8 mx-auto sm:py-12 md:py-16">
      <Button 
        variant="outline" 
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft className="mr-2" /> Back
      </Button>
      
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:gap-4 sm:flex-nowrap">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-2 overflow-hidden rounded-full sm:w-10 sm:h-10 sm:mr-3">
                  <img 
                    src={blog.authorImage || "https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//placeholder-author.jpg"} 
                    alt={blog.author} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-sm text-muted-foreground sm:text-base">{blog.author}</span>
              </div>
              <span className="hidden text-muted-foreground sm:block">|</span>
              <span className="text-sm text-muted-foreground sm:text-base">
                {format(new Date(blog.date), 'MMMM dd, yyyy')}
              </span>
            </div>
            
            <div className="mb-6 overflow-hidden rounded-lg sm:mb-8">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="object-cover w-full h-auto"
              />
            </div>
            
            <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={components}
              >
                {isTypingComplete ? blog.content : typedContent}
              </ReactMarkdown>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <span className="text-sm font-medium sm:text-base">Share:</span>
              {shareButtons.map((button, index) => (
                <motion.a
                  key={button.name}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    opacity: 1
                  }}
                  title={`Share on ${button.name}`}
                >
                  {button.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <h3 className="mb-3 text-lg font-semibold sm:text-xl">About the Author</h3>
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 mr-3 overflow-hidden rounded-full sm:w-16 sm:h-16 sm:mr-4">
                    <img 
                      src={blog.authorImage || "https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//placeholder-author.jpg"} 
                      alt={blog.author} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold sm:text-base">{blog.author}</h4>
                    <p className="text-xs text-muted-foreground sm:text-sm">Tech Writer & Developer</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Gifted Maurice is a passionate tech writer and software developer with over 10 months of experience
                  in building and deploying web applications.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="mb-3 text-lg font-semibold sm:text-xl">Related Posts</h3>
                <div className="space-y-3 sm:space-y-4">
                  {relatedBlogs.map(relatedBlog => (
                    <div key={relatedBlog.id} className="flex">
                      <div className="flex-shrink-0 w-16 h-16 mr-3 overflow-hidden rounded sm:w-20 sm:h-20 sm:mr-4">
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-medium line-clamp-2 sm:text-base">
                          <Link to={`/blogs/${relatedBlog.id}`} className="hover:text-primary">
                            {relatedBlog.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          {format(new Date(relatedBlog.date), 'MMM dd, yyyy')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;