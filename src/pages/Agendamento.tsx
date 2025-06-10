
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { specialties } from "@/data/specialties";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nome deve ter pelo menos 3 caracteres",
  }),
  phone: z.string().min(10, {
    message: "Telefone inválido",
  }),
  email: z.string().email({
    message: "Email inválido",
  }),
  specialty: z.string({
    required_error: "Por favor selecione uma especialidade",
  }),
  preferredDate: z.date({
    required_error: "Por favor selecione uma data",
  }),
  message: z.string().optional(),
  lgpdConsent: z.boolean().refine(value => value === true, {
    message: "Você precisa aceitar os termos de privacidade",
  }),
});

export default function Agendamento() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      lgpdConsent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Em um ambiente real, enviaríamos esses dados para o backend
    console.log(values);
    
    // Simulação de envio bem-sucedido
    setTimeout(() => {
      toast({
        title: "Agendamento recebido!",
        description: "Entraremos em contato em breve para confirmar.",
      });
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <>
      <Helmet>
        <title>Agendamento | ISO - Instituto Seu Olhar</title>
        <meta 
          name="description" 
          content="Agende sua consulta no ISO - Instituto Seu Olhar. Atendimento personalizado nas especialidades de Oftalmologia, Saúde Mental, Obesidade e Estilo de Vida."
        />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agende sua Consulta</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Preencha o formulário abaixo ou entre em contato via WhatsApp para agendar sua consulta com nossos especialistas.
          </p>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Agendamento Recebido!</h2>
                  <p className="text-muted-foreground mb-6">
                    Obrigado por agendar sua consulta no ISO - Instituto Seu Olhar. 
                    Nossa equipe entrará em contato em breve para confirmar os detalhes do seu agendamento.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Fazer novo agendamento</Button>
                </div>
              ) : (
                <div className="bg-card p-8 rounded-lg shadow-sm border">
                  <h2 className="text-2xl font-bold mb-6">Formulário de Agendamento</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} />
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
                              <FormLabel>Telefone</FormLabel>
                              <FormControl>
                                <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="seu@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="specialty"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Especialidade</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione uma especialidade" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {specialties.map((specialty) => (
                                    <SelectItem key={specialty.id} value={specialty.id}>
                                      {specialty.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Data preferencial</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Selecione uma data</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => {
                                    // Desabilita datas passadas e fins de semana
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    const day = date.getDay();
                                    return date < today || day === 0 || day === 6;
                                  }}
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              Selecione a data preferencial para sua consulta (dias úteis).
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem (opcional)</FormLabel>
                            <FormControl>
                              <textarea
                                className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                placeholder="Informações adicionais sobre sua consulta"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lgpdConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Concordo com a utilização dos meus dados de acordo com a Política de Privacidade
                              </FormLabel>
                              <FormDescription>
                                Ao marcar esta opção, você concorda que seus dados serão utilizados exclusivamente 
                                para fins de agendamento e comunicação relacionada à sua consulta.
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full md:w-auto">Enviar agendamento</Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-card p-8 rounded-lg shadow-sm border h-full">
                <h2 className="text-2xl font-bold mb-6">Contato Direto</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Agende pelo WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      Prefere agendar diretamente? Entre em contato pelo nosso WhatsApp oficial.
                    </p>
                    <a 
                      href="https://wa.me/5531999999999"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Agendar pelo WhatsApp
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Horário de Atendimento</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Segunda à Sexta</span>
                        <span>08:00 - 18:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sábado</span>
                        <span>08:00 - 12:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Domingo</span>
                        <span>Fechado</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Nosso Endereço</h3>
                    <address className="not-italic text-muted-foreground">
                      Rua Exemplo, 123<br />
                      Bairro Centro<br />
                      Belo Horizonte - MG<br />
                      CEP: 30000-000
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
