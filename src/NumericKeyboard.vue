<script>
import { typeofConstructor } from './lib/utils/type.js'
import { Options, Mixins } from './lib/keyboard.js'
import { ENTER } from './lib/keys.js'

export default {
  name: 'NumericKeyboard',
  props: (() => {
    let props = {}
    for (let name in Options) {
      props[name] = { default: Options[name], type: [typeofConstructor(Options[name]), String, Number, Boolean, Array, Object, Date, Function] }
    }
    return props
  })(),
  mixins: [{ methods: Mixins }],
  data: () => ({ ks: null }),
  methods: {
    dispatch(event, payload) {
      this.$emit(event, payload)
    }
  },
  created() {
    this.init(this._props)
  },
  beforeDestroy() {
    this.destroy()
  },
    render() {
    return (
      <table class="numeric-keyboard">
        <tbody>
          {this.ks.resolvedLayout.map((r, i) =>
            <tr key={i}>
              {r.map(c =>
                <td
                  key={c.key}
                  rowSpan={c.rowspan}
                  colSpan={c.colspan}
                  data-key={c.key}
                  data-icon={c.key === ENTER ? this.kp.entertext : c.key}
                  class="numeric-keyboard-key"
                  vOn:touchend={e => this.onTouchend(c.key, e)} >
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}
</script>
<style lang="stylus">
@import './lib/styles/keyboard.styl'
</style>