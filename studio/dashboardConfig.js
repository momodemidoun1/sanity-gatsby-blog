export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2491cd153fd7290e12908c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3v67ur71',
                  apiId: 'bcc53670-c40d-4cfc-b243-82f32c77da03'
                },
                {
                  buildHookId: '5e2491cde6ddb6f0eefff5d1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ua98snq1',
                  apiId: 'e9efd158-66d4-4751-84ba-8978391f7b4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/momodemidoun1/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ua98snq1.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
