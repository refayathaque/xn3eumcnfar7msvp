<template>
  <!-- https://github.com/twbs/bootstrap/commit/2ac2a5a91e2958a367c46a61d05162f640457db5?branch=2ac2a5a91e2958a367c46a61d05162f640457db5&diff=unified#diff-e622a52cb8e4d20a4cf9106c5990cdf777c635c6df3f2cb6b49ea9bfdc777fcc -->
  <section class="py-5 bg-light">
    <div class="row py-lg-4">
      <div class="col-lg-6 col-md-8 mx-auto">
        <p class="display-2 text-success">{{ heading }}</p>
        <p class="lh-base">
          {{ primaryTextA }}
        </p>
        <p class="lh-base text-success">
          {{ primaryTextB }}
        </p>
        <p class="lh-base">
          {{ primaryTextC }}
        </p>
        <hr class="my-4" />
        <p class="lead lh-base text-primary">
          {{ secondaryTextA }}
        </p>
        <p class="lead lh-base text-primary">
          {{ secondaryTextB }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: "Lorem ipsum" },
    primaryTextA: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    primaryTextB: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    primaryTextC: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    secondaryTextA: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    secondaryTextB: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
};
</script>

<style></style>
