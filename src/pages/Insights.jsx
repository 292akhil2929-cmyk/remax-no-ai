import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';
import moment from 'moment';

export default function Insights() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-created_date', 20),
  });

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">KNOWLEDGE HUB</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold italic text-foreground mb-4">Market Insights</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            Expert analysis, investment guides, and the latest Dubai real estate trends — your edge in the market.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => <div key={i} className="bg-card border border-border/50 rounded-lg h-64 animate-pulse" />)}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <article key={post.id} className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
                  {post.image_url && (
                    <img src={post.image_url} alt={post.title} className="w-full aspect-video object-cover" />
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {moment(post.created_date).format('MMM D, YYYY')}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body text-lg mb-2">Insights Coming Soon</p>
              <p className="text-sm text-muted-foreground">Our team is preparing expert market analysis and investment guides.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}