<template>
  <Nav :activeLink="''" :signInLink="true" :signClosed="false"/>

  <main class="main">
    <div class="container">
      <div class="row">

        <div class="sign-up__content-box">
          
          <div class="sign-up__content">
            <router-link to="/" class="logo"><img src="@/assets/images/logo.png" alt="" class="logo-img"/>vision</router-link>
            
            <form class="sign-up__form" @submit.prevent="clickLocation">
              <p class="sign-up__form-title">sign up</p>
              
              <div class="sign-inp-box">
                <p class="input-name">name</p>
                <input type="text" autocomplete="off" required class="sign-up-name-inp" v-model="userName" placeholder="name" maxlength="30">
              </div>

              <div class="sign-inp-box">
                <p class="input-name">email</p>
                <input type="email" autocomplete="off" required class="sign-up-email-inp" v-model="userEmail" placeholder="email" maxlength="30">
              </div>

              <div class="sign-inp-box">
                <p class="input-name">phone</p>
                <input type="number" autocomplete="off" required class="sign-up-number-inp" v-model="userNumber" placeholder="number" maxlength="30">
              </div>
              
              <div class="sign-inp-box">
                <p class="input-name">password</p>
                <input :type="showPassword ? 'text': 'password'" required autocomplete="off" class="sign-up-password-inp" v-model="userPassword" placeholder="password" maxlength="30">

                <p class="password-show-btn" @click="showPassword = !showPassword"><i v-if="showPassword" class="fas fa-lock-open"></i> <i v-else class="fas fa-lock"></i></p>
              </div>

              <div class="sign-inp-box">
                <p class="input-name">confirm password</p>
                <input :type="showPassword ? 'text': 'password'" autocomplete="off" required class="sign-up-conpassword-inp" v-model="userConfPassword" placeholder="confirm password" maxlength="30">
              </div>

              <button class="sign-up-btn">register</button>
              
              <router-link to="signIn" class="sign-in-link">Already have an account? <span>sign in</span></router-link>
            </form>
            
          </div>
          
          <img :src="signUpImg" alt="" class="sign-up__img">
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import NavVue from './Nav.vue'

export default {
  name: 'SignUp',
  components: {
    Nav: NavVue
  },
  data() {
    return {
      signUpImg: require('@/assets/images/register/rightSide.svg'),
      userName: '',
      userEmail: '',
      userPassword: '',
      userConfPassword: '',
      userNumber: '',
      showPassword: false,
    }
  },
  methods: {
    clickLocation() {
      if (this.userPassword == this.userConfPassword && this.userName != '' && this.userEmail != '' && this.userNumber != '' && this.userPassword != '' && this.userConfPassword != '') {
        sessionStorage.setItem('registered', true)
        location.href = "#/profile"
      } else {
        alert("Error try again, incorrent confirm password or free field")
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 100px 0;
  
  .row {
    justify-content: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primaryColor);
    user-select: none;

    .logo-img {
      max-width: 68px;
      min-width: 68px;
      max-height: 36px;
      min-height: 36px;
      object-fit: cover;
    }
  }
  
  .sign-up__content-box {
    max-width: 1035px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: var(--thirdColor);
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
    
    .sign-up__content {
      max-width: 500px;
      min-width: 255px;
      width: 100%;
      padding: 0 30px;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 60px;
      
      .sign-up__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 5px;
        
        &-title {
          font-size: 24px;
          color: var(--primaryColor);
          font-weight: 600;
          text-transform: uppercase;
        }

        .sign-up-btn {
          width: 100%;
          padding: 8px 10px;
          background: linear-gradient(269.46deg, #A36DA2 0.24%, #59A0C5 96.9%);
          box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
          border-radius: 15px;
          border: none;
          font-size: 20px;
          color: var(--thirdColor);
          font-weight: 500;
          text-transform: capitalize;
          margin: 35px 0 20px;
          cursor: pointer;
        }

        .sign-in-link {
          width: 100%;
          font-size: 16px;
          color: #A6A0A0;
          font-weight: 500;
          text-transform: capitalize;
          text-align: center;

          span {
            color: var(--linkHoverColor);
          }
        }

        .sign-inp-box {
          width: 100%;
          display: flex;
          justify-content: end;
          text-align: end;
          align-items: center;
          gap: 15px;

          .input-name {
            font-size: 17px;
            color: var(--primaryColor);
            text-transform: capitalize;
            font-weight: 500;
            flex-shrink: 1;
          }

          input {
            max-width: 265px;
            width: 100%;
            border: none;
            background: transparent;
            outline: none;
            font-size: 18px;
            color: var(--linkHoverColor);
            font-weight: 500;
            padding: 8px;
            padding-left: 0;
            border-bottom: 2px solid var(--linkHoverColor);

            &::placeholder {
              color: #A6A0A0;
              font-weight: 400;
              text-transform: capitalize;
            }
          }
        }

        .password-show-btn {
          font-size: 20px;
          color: #A6A0A0;
          cursor: pointer;
        } 

      }

    }
    
    .sign-in__img {
      max-width: 530px;
      width: 100%;
    }

  }
  
}

</style>