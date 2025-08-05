/**
 * Example component demonstrating Asante naming conventions
 * This shows how to properly structure components with consistent naming
 */

import { useAsanteClasses } from '@/lib/asante-classes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AsanteComponentExampleProps {
  title: string;
  description: string;
  variant?: 'default' | 'featured' | 'compact';
  onAction?: () => void;
}

export function AsanteComponentExample({
  title,
  description,
  variant = 'default',
  onAction
}: AsanteComponentExampleProps) {
  const { component, state, cultural, combine, componentClass } = useAsanteClasses();

  // Using the naming convention for CSS classes
  const cardClass = combine(
    componentClass.card(variant),
    cultural.glow,
    'hover:shadow-lg transition-all duration-300'
  );

  const buttonClass = combine(
    componentClass.button('primary'),
    state.hover,
    'font-ubuntu'
  );

  return (
    <div className={combine('asante-component-example', `asante-component-example--${variant}`)}>
      <Card className={cardClass}>
        <CardHeader className="asante-component-example__header">
          <CardTitle className="asante-component-example__title">
            {title}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className={combine(component.badge, cultural.heritage)}
          >
            Ubuntu
          </Badge>
        </CardHeader>
        
        <CardContent className="asante-component-example__content">
          <p className="asante-component-example__description">
            {description}
          </p>
          
          {onAction && (
            <Button 
              onClick={onAction}
              className={buttonClass}
            >
              Take Action
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Example usage in a page component
export function ExamplePageUsage() {
  const { page, layout, combine } = useAsanteClasses();

  return (
    <div className={combine(layout.main, page.ubuntu)}>
      <header className={combine(layout.header, 'asante-page-ubuntu__header')}>
        <h1 className="asante-page-ubuntu__title">Ubuntu Dashboard</h1>
      </header>
      
      <main className={combine(layout.content, 'asante-page-ubuntu__content')}>
        <AsanteComponentExample
          title="Welcome to Asante"
          description="Begin your Ubuntu journey of growth and connection"
          variant="featured"
          onAction={() => console.log('Action taken')}
        />
      </main>
    </div>
  );
} 