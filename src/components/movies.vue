<template>
    <div class="header">
    
        <div class="topnav">
        <a href="#">home</a>
         <a href="#">latest Movies</a>
        <a href="#">About Us</a>
        </div>
        <h1>movie list</h1>
    <br>
 <div>
        <vue-images  :imgs="images">
        </vue-images>
        
 </div>
  <br><br>
<div class="input-group mb-3">
  
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div><br>
  <button type="button" class="btn btn-primary">Submit</button>
    </div>
</template>
<script>
import vueImages from 'vue-images/dist/vue-images'

export default {
  data () {
    return {
      images: [
        {
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91UiYv1KfFL._SL1500_.jpg',
          caption: 'Photo by 1'
        },
        {
          imageUrl: 'https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/captain-marvel-epic-61x91-5cm-movie-poster-31596-1-p.jpg',
          caption: 'Photo by 2'
        },
        {
          imageUrl: 'https://lh3.googleusercontent.com/proxy/NUYh_NGCvPVUo5KLikIjeY2V22gmJhbTPrIZ456zi9QDoDFJgd6VJGgggzSc2hfK-BgJ8qnp0FnzRKx6seqXEwishoLZczZXFytuaeZFLwRVDo_7lDNKnwq30r5_ovrxFZIkdcVkyHWeMQ',
          caption: 'Photo by 3'
        },
        {
          imageUrl: 'https://2.bp.blogspot.com/-1EOkftgFIsk/XEianBQMd_I/AAAAAAAAABs/8pHaxXgo8cYcEij2AcFxjLMbBBikPrrGQCLcBGAs/s320/gully-boy-ranveer-poster-releasae-date-star-cast-mt-wiki.jpg',
          caption: 'Photo by 4'
        }
      ]
    }
  },
  components: {
    vueImages
  }
}

</script>
<style>
.s1{
    height: 100px;
   margin:100px;
    background-color: antiquewhite;
}
.header {
  background-color: #F1F1F1;
  text-align: center;
  padding: 20px;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

</style>
