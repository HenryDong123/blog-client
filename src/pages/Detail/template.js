import marked from 'marked'
import blog from '@/api/blog'

export default {
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createAt: ''
    }
  },
  created() {
    blog.getDetail({blogId: this.$route.params.blogId}).then(res => {
      console.log(res)
      this.title = res.data.title
      this.rawContent = res.data.content
      this.createAt = res.data.user.createdAt
      this.user = res.data.user
    })
  },
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  }
}
