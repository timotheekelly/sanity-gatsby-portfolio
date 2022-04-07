export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624f285c18ce933bc5c38cfc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rirhi242',
                  apiId: '653e7483-1c32-42ee-927e-ffef3f9d8e4a'
                },
                {
                  buildHookId: '624f285c040ebf4341fd9823',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pnz4wkq9',
                  apiId: 'd8cc6a49-aa6c-4a31-ba27-d5b8d5afcb12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timotheekelly/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pnz4wkq9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
