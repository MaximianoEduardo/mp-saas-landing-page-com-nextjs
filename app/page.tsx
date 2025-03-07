"use client"

import CallOutComponent from "./components/callout/callout";
import CardComponent from "./components/card/card";
import FooterComponent from "./components/footer/footer";
import EmailFormComponent from "./components/form/form";
import HeaderComponent from "./components/header/header";
import HowWorksComponent from "./components/howWorks/howWorks";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="mx-auto w-full">
      <header className="lg:max-w-[1352px] max-w-full mx-auto">

        <HeaderComponent />
      </header>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 md:px-0"
      >
        <CallOutComponent
            isH1={true}
            title="Simplifique Seus Estudos" 
            description="Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.">
          <EmailFormComponent />
        </CallOutComponent>
      </motion.section>

      

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white px-4 md:px-0"
      >
        <HowWorksComponent />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 md:px-0"
      >
        <CallOutComponent
            title="Preço Simples e Transparente" 
            description="Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia. ">
          <CardComponent />
        </CallOutComponent>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white px-4 md:px-0"
      >
        <CallOutComponent
            title="Pronto Para Mudar Sua Vida?" 
            description="Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos ">

            <div className="description flex flex-col items-center justify-center gap-6 min-w-full lg:min-w-[422px]">
                <Button className="w-full">  
                  Assine Agora
                </Button>
                <span className="text-[#6B7280] text-sm font-light"> Comece sua assinatura agora mesmo. Cancele quando quiser.  </span>
            </div>

          
        </CallOutComponent>
      </motion.section>

      <section className="bg-white px-4 md:px-0">
        <FooterComponent />
      </section>

    </main>
  );
}
