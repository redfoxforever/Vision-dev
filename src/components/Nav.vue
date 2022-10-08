<template>
  <nav class="nav">
    <div class="container">
      <div class="row">
        <router-link to="/" class="logo"><img src="@/assets/images/logo.png" alt="" class="logo-img"/>vision</router-link>

        <div class="nav__links" :class="{ hide: hide }">
          <ul class="nav__list">

            <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
              <router-link :to="link" class="nav__list-link" :class="link == activeLink ? 'active' : ''" >{{ link }}</router-link>
            </li>

          </ul>

          <router-link to="product" v-show="signClosed" class="shop-cart-link" :class="{active: cartlinkActive}"><i class="fas fa-shopping-cart"></i></router-link>
          <router-link :to="registered ? 'profile' : 'signIn'" v-show="signClosed" class="login-link" :class="{active: userlinkActive}" ><i class="fas fa-user"></i></router-link>

          <router-link to="signUp" v-show="signUpLink" class="sign__link sign-up__link">sign up</router-link>
          <router-link to="signIn" v-show="signInLink" class="sign__link sign-in__link">sign in</router-link>
        </div>

        <button class="navbar-btn" @click="hide = !hide" :class="{hiden: hide}">
          <span class="navbar-btn-line"></span>
          <span class="navbar-btn-line"></span>
          <span class="navbar-btn-line"></span>
        </button>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navLinks: ["home", "category", "location", "faq"],
      hide: window.innerWidth <= 992 ? true : false,
      registered: JSON.parse(sessionStorage.getItem('registered'))
    };
  },
  props: {
    activeLink: {
      type: String,
      default: "home",
    },
    signClosed: {
      type: Boolean,
      default: true,
    },
    signInLink: {
      type: Boolean,
      default: false,
    },
    signUpLink: {
      type: Boolean,
      default: false,
    },
    userlinkActive: {
      type: Boolean,
      default: false
    },
    cartlinkActive: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  position: sticky;
  top: 0;
  padding: 16px 0;
  background: var(--thirdColor);
  z-index: 2022;
  box-shadow: 0px 3px 10px rgb(0, 0, 0, 25%);

  .row {
    justify-content: space-between;
    align-items: center;
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

  .nav__links {
    display: flex;
    column-gap: 30px;
    align-items: center;

    .nav__list {
      display: flex;
      column-gap: 30px;
      align-items: center;

      &-link {
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
        text-transform: capitalize;
        color: var(--linkColor);
        transition: 0.3s;

        &:hover {
          color: var(--linkHoverColor);
        }

        &.active {
          color: var(--linkHoverColor);
        }
      }
    }

    .shop-cart-link {
      font-size: 22px;
      color: var(--linkColor);
      transition: 0.3s;

      &:hover {
        color: var(--linkHoverColor);
      }

      &.active {
        color: var(--linkHoverColor);
      }
    }

    .login-link {
      font-size: 22px;
      color: var(--linkColor);
      transition: 0.3s;

      &:hover {
        color: var(--linkHoverColor);
      }

      &.active {
        color: var(--linkHoverColor);
      }
    }

    .sign__link {
      color: var(--thirdColor);
      padding: 10px 40px;
      border-radius: 15px;
      background: var(--primaryColor);
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;

      &.sign-up__link {
        background: linear-gradient(269.46deg, #a36da2 0.24%, #59a0c5 96.9%);
        box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
      }
      
      &.sign-in__link {
        background: linear-gradient(180deg, rgba(12, 218, 246, 0.72) 0%, rgba(6, 102, 247, 0.64) 100%);
        box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
      }
    }
  }

  .navbar-btn {
    display: none;
  }
}

@media (max-width: 992px) {
  .nav__links {
    max-width: max-content;
    width: 100%;
    position: fixed;
    top: 68px;
    right: 0;
    flex-direction: column;
    height: calc(100vh - 68px);
    align-items: flex-end !important;
    padding: 15px;
    row-gap: 20px;
    background: var(--thirdColor);
    z-index: -1;
    box-shadow: -10px 10px 10px rgb(0, 0, 0, 25%);
    overflow-y: auto;
    transition: 0.4s;

    .nav__list {
      flex-direction: column;
      align-items: flex-end !important;
      row-gap: 10px;
    }

    &.hide {
      transform: translateX(120%);
    }
  }

  $navBtnLineWidth: 30px;

  .navbar-btn {
    display: flex !important;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    border: 0;
    background: transparent;
    row-gap: 5px;
    height: max-content;
    cursor: pointer;

    &-line {
      width: $navBtnLineWidth;
      height: 3px;
      background: var(--linkHoverColor);
      border-radius: 16px;
      transition: 0.3s;

      &:nth-of-type(2) {
        width: 20px;
      }
    }
  }
}
</style>