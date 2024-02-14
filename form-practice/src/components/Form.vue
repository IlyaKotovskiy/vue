<template>
  <section>
    <div class="container">
      <form @submit="handleSubmit">
        <div class="form">
          <div class="title">
            <h3>Contact Details</h3>
            <p>Please fill your information so we can get in touch with you.</p>
          </div>
          <div class="inputs">
            <input-component
              type="text"
              title="Name"
              placeholder="Your Name"
              v-model="name"
            ></input-component>
            <input-component
              type="tel"
              title="Phone Number"
              placeholder="(123) 456 - 7890"
              v-model="phoneNumber"
            ></input-component>
            <input-component
              type="email"
              title="Email"
              placeholder="Your Mail ID"
              v-model="email"
            ></input-component>
            <input-component
              type="date"
              title="Date"
              placeholder="dd - mm - yyyy"
              v-model="date"
            ></input-component>
          </div>
        </div>
        <button-component type="submit" title="Submit"></button-component>
      </form>
    </div>
  </section>
</template>

<script>
import InputComponent from '../ui/Input.vue';
import ButtonComponent from '../ui/Button.vue';

export default {
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      name: '',
      phoneNumber: '',
      email: '',
      date: '',
    };
  },
  methods: {
    handleSubmit(e){
      e.preventDefault();

      const formData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        date: this.date
      }

      console.log(formData);
    }
  }
};
</script>

<style scoped>
.form {
  margin: 0 auto;
  width: 700px;
  padding: 24px 48px 90px;
  border-radius: 34px;
  border: 1px solid #eff0f6;
  background: #faf8f8;
  box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
  margin-bottom: 40px;
}

.title {
  padding: 0 12px 16px;
  border-bottom: 1px solid #d9dbe9;
  margin-bottom: 50px;

  h3 {
    font-size: 24px;
    margin-bottom: 6px;
  }

  p {
    color: #6f6c90;
  }
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
