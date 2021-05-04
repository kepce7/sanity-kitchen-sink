export default {
  widgets: [
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
                  buildHookId: '6090ae51c07d7e5c246eb446',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9jtbuhcw',
                  apiId: '80ebc37b-b2e9-4f53-a90b-045bc5a4cbce'
                },
                {
                  buildHookId: '6090ae510012c96d560755b3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q9zau7d9',
                  apiId: 'f72baaa3-ed48-4cba-a26c-7d6c12022562'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kepce7/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q9zau7d9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
