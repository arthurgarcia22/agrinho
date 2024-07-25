import { Section } from "@/components/Section";
import { Text } from "@/components/Text/title";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  const info = [
    {
      id: "agricultura",
      imageUrl:
        "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2eab40a91d534b6e903b6e0aec2ff50e?v=7317f5bc",
      text: "Agricultura de Precisão<br/><br/>A agricultura de precisão é uma abordagem moderna da agricultura que utiliza tecnologia avançada para monitorar e gerenciar a variabilidade dentro dos campos agrícolas, com o objetivo de otimizar o uso de recursos e maximizar a produtividade e a sustentabilidade.<br/><br/>Esta abordagem depende de diversas tecnologias, como sensores, GPS, drones, big data e inteligência artificial, para coletar e analisar dados sobre o solo, as plantas e o ambiente.<br/><br/>Componentes e Tecnologias da Agricultura de Precisão<br/><br/>1. Sensores e IoT (Internet das Coisas):<br/><br/>• Sensores de Solo: Medem a umidade, temperatura, pH e nutrientes do solo em tempo real.<br/><br/>• Sensores de Plantas: Avaliam a saúde das plantas, detectando sinais de estresse hídrico, pragas e doenças.<br/><br/>• Sensores Climáticos: Monitoram condições meteorológicas locais, como temperatura, umidade e velocidade do vento.<br/><br/>2. Sistemas de Posicionamento Global (GPS):<br/><br/>• Permitem o mapeamento preciso dos campos e a aplicação de insumos de forma localizada, reduzindo desperdícios.<br/><br/>3. Drones e Imagens de Satélite:<br/><br/>• Capturam imagens aéreas e dados multiespectrais para identificar problemas no cultivo, como áreas com deficiência nutricional, infestação de pragas ou variações na saúde das plantas.<br/><br/>4. Big Data e Inteligência Artificial (IA):<br/><br/>• Processam grandes volumes de dados coletados para identificar padrões e tendências, auxiliando na tomada de decisões mais informadas.<br/><br/>• Algoritmos de IA podem prever condições climáticas, surtos de pragas e necessidades nutricionais, recomendando ações específicas.<br/><br/>5. Máquinas Agrícolas Inteligentes:<br/><br/>• Tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão que aplicam insumos (fertilizantes, pesticidas, água) de forma variável e controlada.",
    },
    {
      id: "tech",
      imageUrl:
        "https://cerradocase.com.br/wp-content/uploads/2023/06/Case-IH-trator-Magnum-Connect.jpg",
      text: "Tecnologias e Ferramentas da Agricultura de Precisão<br/><br/>1. Sensores e IoT (Internet das Coisas)<br/><br/>Sensores de Solo:<br/><br/>- Função: Medem a umidade, temperatura, pH e nutrientes do solo em tempo real.<br/><br/>- Benefícios: Auxiliam na otimização do uso de água e fertilizantes, melhorando a saúde das plantas e a produtividade do campo.<br/><br/>Sensores de Plantas:<br/><br/>- Função: Avaliam a saúde das plantas, detectando sinais de estresse hídrico, pragas e doenças.<br/><br/>- Benefícios: Permitem a intervenção precoce, prevenindo danos significativos e melhorando o rendimento das culturas.<br/><br/>Sensores Climáticos:<br/><br/>- Função: Monitoram condições meteorológicas locais, como temperatura, umidade e velocidade do vento.<br/><br/>- Benefícios: Fornecem dados essenciais para o planejamento das atividades agrícolas e a previsão de condições que possam afetar as culturas.<br/><br/>2. Sistemas de Posicionamento Global (GPS)<br/><br/>- Função: Permitem o mapeamento preciso dos campos e a aplicação de insumos de forma localizada.<br/><br/>- Benefícios: Reduzem desperdícios, melhoram a eficiência do uso de recursos e permitem o gerenciamento detalhado das áreas de cultivo.<br/><br/>3. Drones e Imagens de Satélite<br/><br/>Drones:<br/><br/>- Função: Capturam imagens aéreas e dados multiespectrais.<br/><br/>- Benefícios: Identificam problemas no cultivo, como áreas com deficiência nutricional, infestação de pragas ou variações na saúde das plantas.<br/><br/>Imagens de Satélite:<br/><br/>- Função: Fornecem uma visão abrangente e contínua dos campos agrícolas.<br/><br/>- Benefícios: Ajudam no monitoramento a longo prazo e na detecção de mudanças sazonais ou anuais.<br/><br/>4. Big Data e Inteligência Artificial (IA)<br/><br/>Big Data:<br/><br/>- Função: Processa grandes volumes de dados coletados do campo.<br/><br/>- Benefícios: Identifica padrões e tendências que podem ser usados para melhorar a tomada de decisões e a gestão agrícola.<br/><br/>Inteligência Artificial:<br/><br/>- Função: Algoritmos de IA analisam dados para prever condições climáticas, surtos de pragas e necessidades nutricionais.<br/><br/>- Benefícios: Recomendam ações específicas, aumentando a precisão e a eficácia das práticas agrícolas.<br/><br/>5. Máquinas Agrícolas Inteligentes<br/><br/>- Função: Tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão.<br/><br/>- Benefícios: Aplicam insumos (fertilizantes, pesticidas, água) de forma variável e controlada, melhorando a eficiência e reduzindo os impactos ambientais.<br/><br/>Conclusão<br/><br/>A agricultura de precisão integra diversas tecnologias avançadas para otimizar o uso de recursos e maximizar a produtividade e a sustentabilidade das atividades agrícolas. Sensores, GPS, drones, big data, IA e máquinas inteligentes trabalham juntos para fornecer dados precisos e recomendações informadas, melhorando a eficiência e a rentabilidade das operações agrícolas.",
    },
    {
      id: "services",
      imageUrl:
        "https://assets.revistacultivar.com.br/6fe97bd3-cea8-4afb-a8ab-dd7f0b672b56.jpg",
      text: "Serviços e Produtos em Agricultura de Precisão<br/><br/>Serviços<br/><br/>1. Monitoramento e Análise de Solo<br/><br/>- Descrição: Serviços de instalação e monitoramento contínuo de sensores de solo para medir umidade, temperatura, pH e nutrientes.<br/><br/>- Benefícios: Oferecem dados em tempo real para otimização do uso de água e fertilizantes, melhorando a saúde das plantas e a produtividade.<br/><br/>2. Avaliação da Saúde das Plantas<br/><br/>- Descrição: Serviços de instalação de sensores de plantas que detectam sinais de estresse hídrico, pragas e doenças.<br/><br/>- Benefícios: Permitem intervenção precoce para evitar danos significativos, garantindo maior rendimento das culturas.<br/><br/>3. Monitoramento Climático<br/><br/>- Descrição: Implementação e manutenção de sensores climáticos que monitoram temperatura, umidade e velocidade do vento local.<br/><br/>- Benefícios: Fornecem dados essenciais para o planejamento de atividades agrícolas e a previsão de condições climáticas que possam afetar as culturas.<br/><br/>4. Mapeamento e Gestão de Campos com GPS<br/><br/>- Descrição: Serviços de mapeamento preciso de campos agrícolas utilizando GPS para aplicação localizada de insumos.<br/><br/>- Benefícios: Reduzem desperdícios, melhoram a eficiência do uso de recursos e permitem gestão detalhada das áreas de cultivo.<br/><br/>5. Inspeção Aérea com Drones<br/><br/>- Descrição: Serviços de captura de imagens aéreas e dados multiespectrais por drones para identificar problemas no cultivo.<br/><br/>- Benefícios: Detectam áreas com deficiência nutricional, infestação de pragas e variações na saúde das plantas, permitindo ações corretivas rápidas.<br/><br/>6. Análise de Dados com Big Data e IA<br/><br/>- Descrição: Processamento de grandes volumes de dados coletados para identificar padrões e tendências, auxiliando na tomada de decisões.<br/><br/>- Benefícios: Algoritmos de IA podem prever condições climáticas, surtos de pragas e necessidades nutricionais, recomendando ações específicas.<br/><br/>7. Operação de Máquinas Agrícolas Inteligentes<br/><br/>- Descrição: Serviços de operação e manutenção de tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão.<br/><br/>- Benefícios: Aplicam insumos de forma variável e controlada, melhorando a eficiência e reduzindo impactos ambientais.<br/><br/>Produtos<br/><br/>1. Sensores de Solo<br/><br/>- Descrição: Dispositivos que medem umidade, temperatura, pH e nutrientes do solo em tempo real.<br/><br/>- Benefícios: Auxiliam na gestão precisa do solo, melhorando a produtividade das culturas.<br/><br/>2. Sensores de Plantas<br/><br/>- Descrição: Dispositivos que avaliam a saúde das plantas e detectam sinais de estresse hídrico, pragas e doenças.<br/><br/>- Benefícios: Permitem intervenções rápidas para evitar perdas na produção.<br/><br/>3. Sensores Climáticos<br/><br/>- Descrição: Dispositivos que monitoram condições meteorológicas locais.<br/><br/>- Benefícios: Fornecem dados para planejamento e prevenção de condições adversas.<br/><br/>4. Sistemas de GPS para Agricultura<br/><br/>- Descrição: Equipamentos que permitem o mapeamento preciso dos campos e a aplicação localizada de insumos.<br/><br/>- Benefícios: Reduzem desperdícios e aumentam a eficiência do uso de recursos.<br/><br/>5. Drones Agrícolas<br/><br/>- Descrição: Drones equipados com câmeras e sensores multiespectrais para captura de imagens aéreas.<br/><br/>- Benefícios: Identificam problemas no cultivo, permitindo ações corretivas rápidas e precisas.<br/><br/>6. Plataformas de Big Data e IA<br/><br/>- Descrição: Software que processa grandes volumes de dados e utiliza algoritmos de IA para análise e previsão.<br/><br/>- Benefícios: Auxiliam na tomada de decisões informadas e na previsão de necessidades agrícolas.<br/><br/>7. Máquinas Agrícolas Inteligentes<br/><br/>- Descrição: Tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão.<br/><br/>- Benefícios: Aplicam insumos de forma eficiente e controlada, melhorando a produtividade e sustentabilidade das operações agrícolas.",
    },
  ];

  return (
    <Section classNameContent="flex min-h-screen md:gap-12 flex-col items-center justify-between md:p-24">
      {info.map((item, i) => (
        <div
          id={item.id}
          key={i}
          className={
            "grid grid-cols-[1fr_min-content] md:grid-rows-1 grid-rows-2 md:grid-cols-2 gap-12"
          }
        >
          <div
            className={cn(
              i % 2 == 0 ? "md:order-1" : "md:order-0",
              "w-full relative h-[80vh] md:h-full bg-zinc-400"
            )}
          >
            <Image src={item.imageUrl} alt="" fill className={"object-cover"} />
          </div>
          <Text size={"p"}><div dangerouslySetInnerHTML={{ __html: item.text }} 
          ></div></Text>
          
        </div>
      ))}
    </Section>
  );
}
