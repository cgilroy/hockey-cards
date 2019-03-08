import './PackOpenAnimation.css'

export default function PackOpenAnimation() {
  return (
    <div class="animation">
    <div class="paper-wrapper">
    <div class="paper">
      <div class="top-foldup foldup">
        <div class="corner__blockout corner__blockout-topleft"></div>
        <div class="corner__blockout corner__blockout-topright"></div>
        <div class="corner corner-topleft"></div>
        <div class="corner corner-topright"></div>
      </div>
      <div class="bottom-foldup foldup">
        <div class="corner__blockout corner__blockout-bottomleft"></div>
        <div class="corner__blockout corner__blockout-bottomright"></div>
        <div class="corner corner-bottomleft"></div>
        <div class="corner corner-bottomright"></div>
      </div>
      <div class="foldout foldout-left"></div>
      <div class="foldout foldout-right"></div>
    </div>
  </div>
</div>
  )
}
