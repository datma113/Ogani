<template>
  <div>
    <background />
    <div class="container mt-5">
      <div class="row body-container">
        <blogsLeft
          class="col-lg-4"
          v-bind:classify="classify"
          v-bind:recentNews="recentNews"
          v-bind:keywordSearchBy="keywordSearchBy"
          v-on:getTitleFromblrCategories="getTitleFromblrCategories"
          v-on:getTextSearchFromblLSearchBar="getTextSearchFromblLSearchBar"
        />
        <blogsRight
          class="col-lg-8"
          v-on:CurrentPageFromblogsRight="CurrentPageFromblogsRight"
          v-bind:numberPage="numberPage"
          v-bind:blogs="conditionItem"
          v-on:getDecreaseNumberFromblRPaginations="
            getDecreaseNumberFromblRPaginations
          "
          v-on:getIncreaseNumberFromblRPaginations="
            getIncreaseNumberFromblRPaginations
          "
        />
      </div>
      {{ filterListByCategories }}
      {{ dividePaginations }}
      {{ getListByTextSearch }}
    </div>
  </div>
</template>

<script>
import background from "./background";
import blogsLeft from "./blL";
import blogsRight from "./blogsRight";
export default {
  name: "blogs",
  data() {
    return {
      classify: [
        { id: 0, title: "all" },
        { id: 1, title: "Beauti" },
        { id: 2, title: "Food" },
        { id: 3, title: "Life Style" },
        { id: 4, title: "Travel" },
        { id: 5, title: "Other" }
      ],

      recentNews: [
        {
          id: 0,
          title: "6 ways to prepare breakfast for 30",
          dmy: "2020-11-12",
          url: "apple.png"
        },
        {
          id: 1,
          title: "Visit the clean farm in the US",
          dmy: "2020-11-12",
          url: "banana1.png"
        },
        {
          id: 2,
          title: "Cooking tips make cooking simple",
          dmy: "2020-11-12",
          url: "blog1.jpg"
        }
      ],

      keywordSearchBy: [
        "All",
        "Apple",
        "Beauty",
        "Vegetables",
        "Fruit",
        "HealthyFood",
        "LifeStyle"
      ],

      blogs: [
        {
          id: 0,
          url: "blog1.jpg",
          dmy: "March 4, 2020",
          cmt: 22,
          title: "6 ways to prepare breakfast for 30",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "beauti"
        },
        {
          id: 1,
          url: "blog2.jpg",
          dmy: "May 4,2019",
          cmt: 23,
          title: "Visit the clean farm in the US",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "food"
        },
        {
          id: 2,
          url: "blog3.jpg",
          dmy: "May 2, 2019",
          cmt: 12,
          title: "Cooking tips make cooking simple",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "lifeStyle"
        },
        {
          id: 3,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "travel"
        },
        {
          id: 4,
          url: "grape.png",
          dmy: "Dec 2, 2020",
          cmt: 3,
          title: "Non-breaking space characters ",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "other"
        },
        {
          id: 5,
          url: "blog2.jpg",
          dmy: "Oct 4, 2020",
          cmt: 66,
          title: "long-arrow-alt-right",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "other"
        },
        {
          id: 6,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "food"
        },
        {
          id: 7,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "travel"
        },
        {
          id: 8,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "food"
        },
        {
          id: 9,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "beauti"
        },
        {
          id: 10,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "lifeStyle"
        },
        {
          id: 11,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "other"
        },
        {
          id: 12,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "travel"
        },
        {
          id: 13,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "beauti"
        },
        {
          id: 14,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "travel"
        },
        {
          id: 15,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "beauti"
        },
        {
          id: 16,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "beauti"
        },
        {
          id: 17,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "food"
        },
        {
          id: 18,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "beauti"
        },
        {
          id: 19,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!",
          type: "other"
        }
      ],
      currentPagePagination: 0,
      numberPage: 0,
      conditionItem: [],
      classifyCategories: "all",
      textSearch: '',
      resetTextSearch: ''
    };
  },
  components: {
    background,
    blogsLeft,
    blogsRight
  },
  methods: {
    CurrentPageFromblogsRight: function(data) {
      this.currentPagePagination = data;
    },
    /**
     * get increase and decrease number from blRPaginations
     * change current page
     *
     */
    getIncreaseNumberFromblRPaginations: function(data) {
      this.currentPagePagination = data;
    },
    getDecreaseNumberFromblRPaginations: function(data) {
      this.currentPagePagination = data;
    },
    /**
     * get title from blLCategories to compare and filter list
     */
    getTitleFromblrCategories: function(data) {
      this.classifyCategories = data;
    },
      getTextSearchFromblLSearchBar:function(data) {
          this.textSearch = data;
          
        }
  },
  computed: {
    dividePaginations: function() {
      /***
       *  divide 8 page
       */
      const SIZE_PAGE = 8;
      /**
       * initiate blog's values
       */

      if (this.classifyCategories.toLowerCase() === "all") {
        /**
         * get number of divide page (8) of blogs
         */
        this.numberPage = Math.ceil(this.blogs.length / SIZE_PAGE);
        /**
         * update conditionItem list
         */
        this.conditionItem = this.blogs.slice(
          this.currentPagePagination * SIZE_PAGE,
          this.currentPagePagination * SIZE_PAGE + SIZE_PAGE
        );
      } else {
        /**
         * reset currentPagination
         */
        this.currentPagePagination = 0;
        /**
         * get number of divide page (8) of condition items
         */
        this.numberPage = Math.ceil(this.conditionItem.length / SIZE_PAGE);
        /**
         * update conditionItem list
         */
        this.conditionItem = this.conditionItem.slice(
          this.currentPagePagination * SIZE_PAGE,
          this.currentPagePagination * SIZE_PAGE + SIZE_PAGE
        );
      }
    },
    filterListByCategories: function() {      
      /**
       * compare 2 String classifyCategories and blogs.type
       * to get a condition list if it not a 'all' String
       */
      if (this.classifyCategories.toLowerCase() != "all") {
        
        this.conditionItem = this.blogs.filter(
          x =>
            x.type.replace(" ", "").toLowerCase() ===
            this.classifyCategories.replace(" ", "").toLowerCase()
        );
      } else this.conditionItem = this.blogs;
    },
    getListByTextSearch: function() {
      let stringCompare = this.textSearch.replace(/\s/g,'').toLowerCase();
      let temp = this.blogs.filter( x => x.title.replace(/\s/g,'').toLowerCase().match(stringCompare) );
      if( temp.length !=0 ) {
          this.conditionItem = temp;
      }
      
      else
        this.conditionItem = [];
    }
  }
};
</script>

<style scoped>
.body-container {
  margin-top: 10rem;
}
</style>
