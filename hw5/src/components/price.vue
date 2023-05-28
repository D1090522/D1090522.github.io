<template>
  <div>
    <form @submit.prevent="handleFormSubmit">
      <label for="priceDate">日期 (輸入格式範例: 2023/01/01)</label>
      <input type="text" id="priceDate" v-model="formData.priceDate" />
      <label for="name">名稱</label>
      <select id="name" v-model="formData.name">
        <option value="無鉛汽油 92">無鉛汽油 92</option>
        <option value="無鉛汽油 95">無鉛汽油 95</option>
        <option value="無鉛汽油 98">無鉛汽油 98</option>
      </select>
      <label for="price">價格</label>
      <input type="text" id="price" v-model="formData.price" />
      <button type="submit">提交</button>
    </form>

    <div>
      <table>
        <thead>
        <tr>
          <th>日期</th>
          <th>名稱</th>
          <th>價格</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.priceDate }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      formData: {
        priceDate: "",
        name: "",
        price: ""
      }
    };
  },
  methods: {
    handleFormSubmit() {
      this.data.push({
        priceDate: this.formData.priceDate,
        name: this.formData.name,
        price: this.formData.price
      });
      this.formData.priceDate = "";
      this.formData.name = "";
      this.formData.price = "";
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
select {
  display: block;
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

button[type="submit"] {
  display: block;
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: #0078d4;
  color: white;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0078d4;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
</style>