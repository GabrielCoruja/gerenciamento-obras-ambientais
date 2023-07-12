'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('works',
    [
      {
        title: 'Oásis Urbano Sustentável',
        description: 'Um projeto inovador de construção que integra soluções sustentáveis, como painéis solares, captação de água da chuva e jardins verticais, para criar um oásis urbano autossuficiente',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Residência de Energia Líquida Zero',
        description: 'Uma residência energeticamente eficiente projetada para produzir a mesma quantidade de energia renovável que consome, utilizando painéis solares, isolamento avançado e sistemas inteligentes de gerenciamento de energia',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Complexo Comercial Sustentável',
        description: 'Um complexo comercial projetado com ênfase na sustentabilidade, incorporando materiais de construção reciclados, eficiência energética, telhados verdes e espaços de convivência ao ar livre',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Torre de Escritórios Eco-friendly',
        description: 'Uma torre de escritórios projetada com tecnologias avançadas de economia de energia, sistemas de ventilação naturais, iluminação LED e uso de materiais sustentáveis, para criar um ambiente de trabalho saudável e sustentável.',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Parque de Energias Renováveis',
        description: 'Um parque de energias renováveis que combina a geração de energia solar, eólica e hídrica em um único local, fornecendo uma fonte limpa e sustentável de energia para a comunidade',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('works', null, {}),
};
