import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nome deve ter pelo menos 3 caracteres",
  }),
  email: z.string().email({
    message: "Email inválido",
  }),
  phone: z.string().min(10, {
    message: "Telefone inválido",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres",
  }),
  lgpdConsent: z.boolean().refine((value) => value === true, {
    message: "Você precisa aceitar os termos de privacidade",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      lgpdConsent: false,
    },
  });

  return (
    <Form {...form}>
      <form
        action="https://formsubmit.co/b04cf3c9939784807ee7465a7c119585"
        method="POST"
        className="space-y-6 bg-black p-8 rounded-lg border border-[#FFD700]/20"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://www.institutoseuolhar.com.br/obrigado"
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nome completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  {...field}
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-[#FFD700]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="seu@email.com"
                    {...field}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-[#FFD700]"
                  />
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
                <FormLabel className="text-white">Telefone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(XX) XXXXX-XXXX"
                    {...field}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-[#FFD700]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Mensagem</FormLabel>
              <FormControl>
                <textarea
                  className="flex min-h-24 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="Digite sua mensagem aqui"
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
                  className="border-zinc-700 data-[state=checked]:bg-[#FFD700] data-[state=checked]:border-[#FFD700]"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-white">
                  Concordo com a utilização dos meus dados de acordo com a
                  Política de Privacidade
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] text-black hover:brightness-110 font-neue-haas"
        >
          Enviar mensagem
        </Button>
      </form>
    </Form>
  );
}
