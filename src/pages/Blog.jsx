import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { format } from 'date-fns';

const CATEGORY_COLORS = {
  'Market Analysis': 'bg-blue-100 text-blue-700',
  'Investment Guide': 'bg-green-100 text-green-700',
  'Golden Visa': 'bg-yellow-100 text-yellow-800',
  'Area Spotlight': 'bg-purple-100 text-purple-700',
  'Developer News': 'bg-orange-100 text-orange-700',
  'Agent Tips': 'bg-pink-100 text-pink-700',
};

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-created_date'),
  });

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Dubai Real Estate Blog
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Market Updates &amp; Investment Insights</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert analysis, area spotlights, and investment guides to help international investors navigate Dubai's property market with confidence.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-muted rounded-2xl h-72 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No posts published yet.</p>
            <p className="text-sm mt-1">Check back soon for market updates and investment guides.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <Link to={`/blog/${featured.id}`} className="group block mb-16">
                <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                  {featured.image_url ? (
                    <img src={featured.image_url} alt={featured.title} className="w-full h-72 md:h-full object-cover" />
                  ) : (
                    <div className="w-full h-72 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-primary/30" />
                    </div>
                  )}
                  <div className="p-8 flex flex-col justify-center">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit ${CATEGORY_COLORS[featured.category] || 'bg-muted text-muted-foreground'}`}>
                      {featured.category}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {format(new Date(featured.created_date), 'MMMM d, yyyy')}
                      </span>
                      <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Post Grid */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col">
                    {post.image_url ? (
                      <img src={post.image_url} alt={post.title} className="w-full h-44 object-cover" />
                    ) : (
                      <div className="w-full h-44 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-primary/25" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 w-fit ${CATEGORY_COLORS[post.category] || 'bg-muted text-muted-foreground'}`}>
                        {post.category}
                      </span>
                      <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(post.created_date), 'MMM d, yyyy')}
                        </span>
                        <span className="text-primary text-xs font-semibold flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}