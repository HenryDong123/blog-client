import blog from '@/api/blog'

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      atIndex: false,
      content: '',
      title: '',
      description: '',
    }
  },
  methods: {
    onCreate() {
      blog.createBlog({
        title: this.title,
        content: this.content,
        description: this.description,
        atIndex: this.atIndex
      }).then(res =>{
        this.$message.success(res.msg)
        this.$router.push({path: `/detail/${res.data.id}`})
      })
    }
  }
}
