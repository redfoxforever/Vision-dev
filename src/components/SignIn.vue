<template>
  <Nav :activeLink="''" :signUpLink="true" :signClosed="false"/>
  
  <main class="main">
    <div class="container">
      <div class="row">
        
        <div class="sign-in__content-box">
          
          <div class="sign-in__content">
            <router-link to="/" class="logo"><img src="@/assets/images/logo.png" alt="" class="logo-img"/>vision</router-link>
            
            <form class="sign-in__form" @submit.prevent="clickLocation">
              <p class="sign-in__form-title">sign in</p>
              <p class="sign-in__form-subtitle">Please sign in to continue</p>
              
              <input type="email" autocomplete="on" required class="sign-email-inp" v-model="userEmail" placeholder="Email" maxlength="30">

              <div class="sign-password-box">
                <input :type="showPassword ? 'text': 'password'" required autocomplete="off" class="sign-password-inp" v-model="userPassword" placeholder="Password" maxlength="30">

                <p class="password-show-btn" @click="showPassword = !showPassword"><i v-if="showPassword" class="fas fa-lock-open"></i> <i v-else class="fas fa-lock"></i></p>
              </div>
              
              <button class="sign-in-btn">sign in</button>
              
              <router-link to="signUp" class="sign-up-link">haven't registered? <span>sign up</span></router-link>
            </form>
            
          </div>
          
          <img :src="signInImg" alt="" class="sign-in__img">
        </div>
        
        <div class="not-found-modal">
          <p class="not-found-text">user not found</p>
          <p class="try-again-text">try again</p>
        </div>

      </div>
    </div>
  </main>

</template>

<script>

import NavVue from './Nav.vue'

export default {
  name: 'SignIn',
  components: {
    Nav: NavVue
  },
  data() {
    return {
      signInImg: require('@/assets/images/sign-in/rightSide.svg'),
      userEmail: '',
      userPassword: '',
      showPassword: false,
      data: {
        successEmail: 'anonym@gmail',
        successPassword: 'anonym'
      },
    }
  },
  methods: {
    clickLocation() {
      let notFound = document.querySelector('.not-found-modal')
      if (this.userEmail == this.data.successEmail && this.userPassword == this.data.successPassword) {
        sessionStorage.setItem('registered', true)
        location.href = "#/profile"
      } else {
        notFound.style.display = "block", setTimeout(() => notFound.style.display = "none", 2000);
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
  
  .sign-in__content-box {
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
    
    .sign-in__content {
      max-width: 500px;
      min-width: 255px;
      width: 100%;
      padding: 0 50px 0 30px;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 100px;
      
      .sign-in__form {
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
        
        &-subtitle {
          font-size: 16px;
          color: #A6A0A0;
          font-weight: 500;
          margin-bottom: 30px;
        }

        .sign-email-inp,
        .sign-password-inp {
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
          }
        }

        .sign-in-btn {
          width: 100%;
          padding: 8px 10px;
          background: linear-gradient(180deg, rgba(12, 218, 246, 0.72) 0%, rgba(6, 102, 247, 0.64) 100%);
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

        .sign-up-link {
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

        .sign-password-box {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 30px;
          border-bottom: 2px solid var(--linkHoverColor);

          .sign-password-inp {
            border-bottom: none;
          }

          .password-show-btn {
            font-size: 20px;
            color: #A6A0A0;
            cursor: pointer;
          } 

        }

      }

    }
    
    .sign-in__img {
      max-width: 530px;
      width: 100%;
    }
  }
  
  .not-found-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--thirdColor);
    padding: 100px;
    border-radius: 10px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.3);
    display: none;

    .not-found-text {
      color: var(--linkHoverColor);
      font-size: 45px;
      text-transform: uppercase;
      font-weight: 600;
      z-index: 20;
    }

    .try-again-text {
      color: var(--primaryColor);
      font-size: 20px;
      text-align: center;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}

</style>