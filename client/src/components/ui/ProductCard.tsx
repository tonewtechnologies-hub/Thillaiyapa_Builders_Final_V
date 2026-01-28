import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  material: string;
  sizes: string[];
  image: string;
  customization: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white/50 backdrop-blur-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">Material:</span>
            <span>{product.material}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">Sizes:</span>
            <span>{product.sizes.join(", ")}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
          <Link href="/contact">
            Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
