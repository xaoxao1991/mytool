<template>
  <div >
    <div class="content-nav">
      <a item v-for="item in nav_list" target="_blank" :href="item.url">
        <div class="title">
          {{item.name}}
        </div>
        <div class="desc">
            {{item.desc}}
        </div>
      </a>
    </div>
    <div >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav_list:[
        {name:"langman dictionary", desc:"The Longman Dictionary of Contemporary English – widely known as LDOCE – uses 2000 common words in the definitions to make understanding easy. The 9000 most important words to learn are highlighted with three red circles ●○○ and the most common meanings of a word are shown first. In addition, 88,000 example sentences are pronounced by British or American native speakers of English." ,
          url:'http://ldoceonline.com'},
        {name:"collinsdictionary", desc:"Collins is a major publisher of Educational, Language and Geographic content, and have been publishing innovative, inspiring and informative books for over 200 years." ,
          url:'http://collinsdictionary.com'},
        {name:"learnersdictionary", desc:"The Cambridge Learner’s Dictionary has the words, phrases, and collocations that intermediate learners of British English need to know. Clear, simple definitions and audio pronunciations, with thousands of carefully chosen example sentences from the Cambridge English Corpus, help students write and speak English more naturally.",
          url:'http://learnersdictionary.com'
        },
        {name:"ielts ", desc:"The International English Language Testing System (IELTS) measures the language proficiency of people who want to study or work where English is used as a language of communication. It uses a nine-band scale to clearly identify levels of proficiency, from non-user (band score 1) through to expert (band score 9).",
          url:'http://ielts.org'},
        {name:"ets ", desc:"to advance quality and equity in education by providing fair and valid assessments, research and related services. Our products and services measure knowledge and skills, promote learning and performance, and support education and professional development for all people worldwide.",
          url:'http://ets.org'},
      ]
    }
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.content-nav{
  display: flex;
  align-items: center;
  color: #6b7386;
  flex-wrap: wrap;
  padding: .5rem .5rem;
  justify-content: space-evenly;

  width: 900px;
  margin: auto;
  >a[item]{
    flex-shrink: 0;
    padding: .5rem .5rem;
    cursor: pointer;
    width: 12rem;
    background: #53565c;
    border-radius: .5rem;
    margin: 1.5rem .5rem 0 0;
    color: #aaaaaa;
    >.title{

    }
    >.desc{
      text-indent:2em;
      font-size: .6rem;
      padding: .5rem 0 0 0;
      height: 4rem;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
    }
    &:hover{
      color: #ffffff;
      background-color: #1f2d3d;
    }
    &.active{
      color: #ffffff;
    }
  }
  >.x-auto-fill{

  }
}

</style>
