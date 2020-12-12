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
        />
        <blogsRight
          class="col-lg-8"
          v-bind:blogs="dividePaginations"
          v-on:CurrentPageFromblogsRight="CurrentPageFromblogsRight"
          v-bind:numberPage="numberPage"
          v-on:getDecreaseNumberFromblRPaginations="
            getDecreaseNumberFromblRPaginations
          "
          v-on:getIncreaseNumberFromblRPaginations="
            getIncreaseNumberFromblRPaginations
          "
        />
      </div>
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
        { id: 0, title: "all", numberCount: 0 },
        { id: 1, title: "Beauti", numberCount: 0 },
        { id: 2, title: "Food", numberCount: 0 },
        { id: 3, title: "Life Style", numberCount: 0 },
        { id: 4, title: "Travel", numberCount: 0 },
        { id: 5, title: "Other..", numberCount: 0 }
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
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 1,
          url: "blog2.jpg",
          dmy: "May 4,2019",
          cmt: 23,
          title: "Visit the clean farm in the US",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 2,
          url: "blog3.jpg",
          dmy: "May 2, 2019",
          cmt: 12,
          title: "Cooking tips make cooking simple",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 3,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 4,
          url: "grape.png",
          dmy: "Dec 2, 2020",
          cmt: 3,
          title: "Non-breaking space characters ",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 5,
          url: "blog2.jpg",
          dmy: "Oct 4, 2020",
          cmt: 66,
          title: "long-arrow-alt-right",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 6,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 7,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 8,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 9,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 10,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 11,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 12,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 13,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 14,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 15,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 16,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 17,
          url: "blog3.jpg",
          dmy: "Feb 2, 2020",
          cmt: 623,
          title: "Uses and variations",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 18,
          url: "carrot.png",
          dmy: "April 12, 2020",
          cmt: 6,
          title: "And we're brewing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        },
        {
          id: 19,
          url: "blog1.jpg",
          dmy: "Jan 2, 2020",
          cmt: 17,
          title: "Non-collapsing",
          desc:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas similique, ducimus doloremque vero ex!"
        }
      ],
      currentPagePagination: 0,
      numberPage: 3
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
    }
  },
  computed: {
    dividePaginations: function() {
      const SIZE_PAGE = 8;
      return this.blogs.slice(
        this.currentPagePagination * SIZE_PAGE,
        this.currentPagePagination * SIZE_PAGE + SIZE_PAGE
      );
    }
  }
};
</script>

<style scoped>
.body-container {
  margin-top: 10rem;
}
</style>
