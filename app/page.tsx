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
      text: "Agricultura de Precisão A agricultura de precisão é uma abordagem moderna da agricultura que utiliza tecnologia avançada para monitorar e gerenciar a variabilidade dentro dos campos agrícolas, com o objetivo de otimizar o uso de recursos e maximizar a produtividade e a sustentabilidade. Esta abordagem depende de diversas tecnologias, como sensores, GPS, drones, big data e inteligência artificial, para coletar e analisar dados sobre o solo, as plantas e o ambiente Componentes e Tecnologias da Agricultura de Precisão 1. Sensores e loT (Internet das Coisas): • Sensores de Solo: Medem a umidade, temperatura, pH e nutrientes do solo em tempo real. • Sensores de Plantas: Avaliam a saúde das plantas, detectando sinais de estresse hídrico, pragas e doenças. • Sensores Climáticos: Monitoram condições meteorológicas locais, como temperatura, umidade e velocidade do vento. 2. Sistemas de Posicionamento Global (GPS): • Permitem o mapeamento preciso dos campos e a aplicação de insumos de forma localizada, reduzindo desperdícios. 3. Drones e Imagens de Satélite: • Capturam imagens aéreas e dados multiespectrais para identificar problemas no cultivo, como áreas com deficiência nutricional, infestação de pragas ou variações na saúde das plantas. 4. Big Data e Inteligência Artificial (IA): • Processam grandes volumes de dados coletados para identificar padrões e tendências, auxiliando na tomada de decisões mais informadas. • Algoritmos de lA podem prever condições climáticas, surtos de pragas e necessidades nutricionais, recomendando ações especificas. 5. Máquinas Agrícolas Inteligentes: • Tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão que aplicam insumos (fertilizantes, pesticidas, água) de forma variável e controlada.",
    },
    {
      id: "tech",
      imageUrl:
        "https://cerradocase.com.br/wp-content/uploads/2023/06/Case-IH-trator-Magnum-Connect.jpg",
      text: "## Tecnologias e Ferramentas da Agricultura de Precisão ### 1. Sensores e IoT (Internet das Coisas) *Sensores de Solo:*   - *Função:* Medem a umidade, temperatura, pH e nutrientes do solo em tempo real. - *Benefícios:* Auxiliam na otimização do uso de água e fertilizantes, melhorando a saúde das plantas e a produtividade do campo. *Sensores de Plantas:*   - *Função:* Avaliam a saúde das plantas, detectando sinais de estresse hídrico, pragas e doenças. - *Benefícios:* Permitem a intervenção precoce, prevenindo danos significativos e melhorando o rendimento das culturas. *Sensores Climáticos:*   - *Função:* Monitoram condições meteorológicas locais, como temperatura, umidade e velocidade do vento. - *Benefícios:* Fornecem dados essenciais para o planejamento das atividades agrícolas e a previsão de condições que possam afetar as culturas. ### 2. Sistemas de Posicionamento Global (GPS) *Função:* Permitem o mapeamento preciso dos campos e a aplicação de insumos de forma localizada. - *Benefícios:* Reduzem desperdícios, melhoram a eficiência do uso de recursos e permitem o gerenciamento detalhado das áreas de cultivo. ### 3. Drones e Imagens de Satélite *Drones:* - *Função:* Capturam imagens aéreas e dados multiespectrais. - *Benefícios:* Identificam problemas no cultivo, como áreas com deficiência nutricional, infestação de pragas ou variações na saúde das plantas. *Imagens de Satélite:* - *Função:* Fornecem uma visão abrangente e contínua dos campos agrícolas. - *Benefícios:* Ajudam no monitoramento a longo prazo e na detecção de mudanças sazonais ou anuais. ### 4. Big Data e Inteligência Artificial (IA) *Big Data:* - *Função:* Processa grandes volumes de dados coletados do campo. - *Benefícios:* Identifica padrões e tendências que podem ser usados para melhorar a tomada de decisões e a gestão agrícola. *Inteligência Artificial:* - *Função:* Algoritmos de IA analisam dados para prever condições climáticas, surtos de pragas e necessidades nutricionais. - *Benefícios:* Recomendam ações específicas, aumentando a precisão e a eficácia das práticas agrícolas. ### 5. Máquinas Agrícolas Inteligentes *Função:* Tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão. - *Benefícios:* Aplicam insumos (fertilizantes, pesticidas, água) de forma variável e controlada, melhorando a eficiência e reduzindo os impactos ambientais. ### Conclusão A agricultura de precisão integra diversas tecnologias avançadas para otimizar o uso de recursos e maximizar a produtividade e a sustentabilidade das atividades agrícolas. Sensores, GPS, drones, big data, IA e máquinas inteligentes trabalham juntos para fornecer dados precisos e recomendações informadas, melhorando a eficiência e a rentabilidade das operações agrícolas. ",
    },
    {
      id: "services",
      imageUrl:
        "https://assets.revistacultivar.com.br/6fe97bd3-cea8-4afb-a8ab-dd7f0b672b56.jpg",
      text: "## Serviços e Produtos em Agricultura de Precisão ### Serviços #### 1. Monitoramento e Análise de Solo *Descrição:* Serviços de instalação e monitoramento contínuo de sensores de solo para medir umidade, temperatura, pH e nutrientes. *Benefícios:* Oferecem dados em tempo real para otimização do uso de água e fertilizantes, melhorando a saúde das plantas e a produtividade. #### 2. Avaliação da Saúde das Plantas *Descrição:* Serviços de instalação de sensores de plantas que detectam sinais de estresse hídrico, pragas e doenças. *Benefícios:* Permitem intervenção precoce para evitar danos significativos, garantindo maior rendimento das culturas. #### 3. Monitoramento Climático *Descrição:* Implementação e manutenção de sensores climáticos que monitoram temperatura, umidade e velocidade do vento local. *Benefícios:* Fornecem dados essenciais para o planejamento de atividades agrícolas e a previsão de condições climáticas que possam afetar as culturas. #### 4. Mapeamento e Gestão de Campos com GPS *Descrição:* Serviços de mapeamento preciso de campos agrícolas utilizando GPS para aplicação localizada de insumos. *Benefícios:* Reduzem desperdícios, melhoram a eficiência do uso de recursos e permitem gestão detalhada das áreas de cultivo. #### 5. Inspeção Aérea com Drones *Descrição:* Serviços de captura de imagens aéreas e dados multiespectrais por drones para identificar problemas no cultivo. *Benefícios:* Detectam áreas com deficiência nutricional, infestação de pragas e variações na saúde das plantas, permitindo ações corretivas rápidas. #### 6. Análise de Dados com Big Data e IA *Descrição:* Processamento de grandes volumes de dados coletados para identificar padrões e tendências, auxiliando na tomada de decisões. *Benefícios:* Algoritmos de IA podem prever condições climáticas, surtos de pragas e necessidades nutricionais, recomendando ações específicas. #### 7. Operação de Máquinas Agrícolas Inteligentes *Descrição:* Serviços de operação e manutenção de tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão. *Benefícios:* Aplicam insumos de forma variável e controlada, melhorando a eficiência e reduzindo impactos ambientais. ### Produtos #### 1. Sensores de Solo *Descrição:* Dispositivos que medem umidade, temperatura, pH e nutrientes do solo em tempo real. *Benefícios:* Auxiliam na gestão precisa do solo, melhorando a produtividade das culturas. #### 2. Sensores de Plantas *Descrição:* Dispositivos que avaliam a saúde das plantas e detectam sinais de estresse hídrico, pragas e doenças. *Benefícios:* Permitem intervenções rápidas para evitar perdas na produção. #### 3. Sensores Climáticos *Descrição:* Dispositivos que monitoram condições meteorológicas locais. *Benefícios:* Fornecem dados para planejamento e prevenção de condições adversas. #### 4. Sistemas de GPS para Agricultura *Descrição:* Equipamentos que permitem o mapeamento preciso dos campos e a aplicação localizada de insumos. *Benefícios:* Reduzem desperdícios e aumentam a eficiência do uso de recursos. #### 5. Drones Agrícolas *Descrição:* Drones equipados com câmeras e sensores multiespectrais para captura de imagens aéreas. *Benefícios:* Identificam problemas no cultivo, permitindo ações corretivas rápidas e precisas. #### 6. Plataformas de Big Data e IA *Descrição:* Software que processa grandes volumes de dados e utiliza algoritmos de IA para análise e previsão. *Benefícios:* Auxiliam na tomada de decisões informadas e na previsão de necessidades agrícolas. #### 7. Máquinas Agrícolas Inteligentes *Descrição:* Tratores, colheitadeiras e pulverizadores equipados com tecnologia de precisão. *Benefícios:* Aplicam insumos de forma eficiente e controlada, melhorando a produtividade e sustentabilidade das operações agrícolas.",
    },
  ];

  return (
    <Section classNameContent="flex min-h-screen gap-12 flex-col items-center justify-between md:p-24">
      {info.map((item, i) => (
        <div
          id={item.id}
          key={i}
          className={
            "grid grid-cols-1 md:grid-rows-1 grid-rows-2 md:grid-cols-2 gap-12"
          }
        >
          <div
            className={cn(
              i % 2 == 0 ? "order-1" : "order-0",
              "w-full relative h-[80vh] md:h-full bg-zinc-400"
            )}
          >
            <Image src={item.imageUrl} alt="" fill className={"object-cover"} />
          </div>
          <Text size={"p"}>{item.text}</Text>
        </div>
      ))}
    </Section>
  );
}
