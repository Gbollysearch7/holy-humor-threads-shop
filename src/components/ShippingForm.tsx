
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Truck, Clock, Zap } from "lucide-react";

const shippingSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter a valid address"),
  city: z.string().min(2, "Please enter a valid city"),
  state: z.string().min(2, "Please enter a valid state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  shippingMethod: z.string(),
  orderNotes: z.string().optional(),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

interface ShippingFormProps {
  onComplete: (data: ShippingFormData) => void;
}

export const ShippingForm = ({ onComplete }: ShippingFormProps) => {
  const form = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      shippingMethod: "standard",
      orderNotes: "",
    },
  });

  const onSubmit = (data: ShippingFormData) => {
    onComplete(data);
  };

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      time: "5-7 business days",
      price: "Free over $50",
      icon: Truck,
    },
    {
      id: "express",
      name: "Express Shipping",
      time: "2-3 business days",
      price: "$9.99",
      icon: Clock,
    },
    {
      id: "overnight",
      name: "Overnight Shipping",
      time: "1 business day",
      price: "$19.99",
      icon: Zap,
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Shipping Address */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shipping Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Anytown" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="CA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ZIP Code</FormLabel>
                  <FormControl>
                    <Input placeholder="12345" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Shipping Method */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shipping Method</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="shippingMethod"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-3"
                    >
                      {shippingOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <div key={option.id} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value={option.id} id={option.id} />
                            <Icon className="h-5 w-5 text-holy-blue dark:text-holy-gold" />
                            <div className="flex-1">
                              <Label htmlFor={option.id} className="font-medium cursor-pointer">
                                {option.name}
                              </Label>
                              <p className="text-sm text-foreground/60">{option.time}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{option.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Order Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Order Notes (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="orderNotes"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea 
                      placeholder="Any special instructions for your order..."
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
          size="lg"
        >
          Continue to Payment
        </Button>
      </form>
    </Form>
  );
};
