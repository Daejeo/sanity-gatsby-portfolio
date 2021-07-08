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
                  buildHookId: '60e6ac8cd498ecaa94d4f78b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n41rkf3g',
                  apiId: 'a6885a58-4ebb-4e77-9f1a-92a7e91c848b'
                },
                {
                  buildHookId: '60e6ac8cb58744aa51370ec9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1dccgirv',
                  apiId: 'bbfd5140-0541-4793-9efe-71082051e0de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Daejeo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1dccgirv.netlify.app',
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
