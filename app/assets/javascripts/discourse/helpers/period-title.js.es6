import { htmlHelper } from 'discourse-common/lib/helpers';

const TITLE_SUBS = {
  all: 'all_time',
  yearly: 'this_year',
  quarterly: 'this_quarter',
  monthly: 'this_month',
  daily: 'today',
};

export default htmlHelper((period, options) => {
  const title = I18n.t('filters.top.' + (TITLE_SUBS[period] || 'this_week'));
  if (options.hash.showDateRange) {
    var dateString = "";
    switch(period) {
      case 'yearly':
        dateString = moment().subtract(1, 'year').format("jMMMM jD, jYYYY") + " - " + moment().format("jMMMM jD, jYYYY");
        break;
      case 'quarterly':
        dateString = moment().subtract(3, 'month').format("jMMMM jD") + " - " + moment().format("jMMMM jD");
        break;
      case 'weekly':
        dateString = moment().subtract(1, 'week').format("jMMMM jD") + " - " + moment().format("jMMMM jD");
        break;
      case 'monthly':
        dateString = moment().subtract(1, 'month').format("jMMMM D") + " - " + moment().format("jMMMM jD");
        break;
      case 'daily':
        dateString = moment().format("jMMMM jD");
        break;
    }

    return `${title} <span class='top-date-string'>${dateString}</span>`;
  } else {
    return title;
  }
});
