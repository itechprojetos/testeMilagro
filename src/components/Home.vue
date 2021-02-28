<template>
  <v-container fluid>
    <div class="images">
      <v-img
        v-for="img in imagesTop"
        :key="img.id"
        lazy-src="https://picsum.photos/id/11/10/6"
        :src="img.download_url"
        height="160"
        v-on:click="showAuthor(img.author)"
        width="200"
      ></v-img>
    </div>
    <div class="divider"></div>
    <div class="images">
      <v-img
        v-for="img in imagesBottom"
        :key="img.id"
        lazy-src="https://picsum.photos/id/11/10/6"
        :src="img.download_url"
        v-on:click="showAuthor(img.author)"
        height="160"
        width="200"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import { ipcRenderer } from "electron";

export default {
  data() {
    return {
      imagesTop: [],
      imagesBottom: [],
    };
  },
  methods: {
    showAuthor(author) {
      ipcRenderer.invoke("notification", author);
    },
  },
  created() {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=4")
      .then((response) => {
        this.imagesTop = response.data;
      });
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=4")
      .then((response) => {
        this.imagesBottom = response.data;
      });
  },
};
</script>

<style>
.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.images div {
  cursor: pointer;
  margin: 0.75rem;
  border-radius: 8px;
}

.divider {
  width: 100%;
  padding: 0.25rem;
  height: 32vh;
}
</style>