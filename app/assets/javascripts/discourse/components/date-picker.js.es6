/* global Pikaday:true */
import loadScript from "discourse/lib/load-script";
import { default as computed, on } from "ember-addons/ember-computed-decorators";

export default Em.Component.extend({
  classNames: ["date-picker-wrapper"],
  _picker: null,

  @on("didInsertElement")
  _loadDatePicker() {
    const input = this.$(".date-picker")[0];
    const container = $("#" + this.get("containerId"))[0];

    loadScript("/javascripts/pikaday.js").then(() => {
      Ember.run.next(() => {
        let default_opts = {
          field: input,
          container: container || this.$()[0],
          bound: container === undefined,
          format: "jYYYY-jMM-jDD",
          firstDay: 0,
          isRTL: true,
          i18n: {
            previousMonth : 'ماه قبل',
            nextMonth     : 'ماه بعد',
            months        : ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریرور','مهر','آبان','آذر','دی','بهمن','اسفند'],
            weekdays      : ['یک‌شنبه','دو‌شنبه','سه‌‌شنبه','چهار‌شنبه','پنچ‌شنبه','‌جمعه','شنبه'],
            weekdaysShort : ['ی','د','س','چ','پ','ج','ش']
          },
         onSelect: date => {this.set("value", digits_fa2en(moment(digits_fa2en(input.value),"jYYYY-jMM-jDD").format("YYYY-MM-DD"))); console.log(input.value); console.log(this.get("value"))}
        };
        this._picker = new Pikaday(_.merge(default_opts, this._opts()));
      });
    });
  },

  @on("willDestroyElement")
  _destroy() {
    this._picker = null;
  },

  @computed()
  placeholder() {
    return I18n.t("dates.placeholder");
  },

  _opts() {
    return null;
  }

});
