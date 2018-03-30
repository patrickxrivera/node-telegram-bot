'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getNameAttribute = function getNameAttribute(_ref) {
  var val = _ref.val;
  return '<strong>' + val + '</strong>\n\n';
};

var getLinkAttribute = function getLinkAttribute(_ref2, emoji) {
  var key = _ref2.key,
      val = _ref2.val;

  var linkedText = key.link(val);
  return emoji + ' ' + linkedText + '\n';
};

var getNonLinkAttribute = function getNonLinkAttribute(_ref3, emoji) {
  var key = _ref3.key,
      val = _ref3.val;
  return emoji + ' ' + key + ': ' + val + '\n\n';
};

var getContactAttribute = function getContactAttribute(_ref4, emoji) {
  var val = _ref4.val;
  return emoji + ' ' + val + '\n';
};

var getAttributeTitle = function getAttributeTitle(platform, emoji) {
  return emoji + ' ' + platform + ' accounts for Rise Community members\n\n';
};

var attributes = exports.attributes = {
  Timestamp: {
    format: function format() {
      return '';
    }
  },
  Rolecategory: {
    format: function format() {
      return '';
    }
  },
  Name: {
    format: function format(data) {
      return getNameAttribute(data);
    }
  },
  Role: {
    emoji: '\uD83D\uDCA5',
    format: function format(data) {
      return getNonLinkAttribute(data, attributes.Role.emoji);
    }
  },
  Specialties: {
    emoji: '\uD83D\uDD11',
    format: function format(data) {
      return getNonLinkAttribute(data, attributes.Specialties.emoji);
    }
  },
  Learning: {
    emoji: '\uD83D\uDCD6',
    format: function format(data) {
      return getNonLinkAttribute(data, attributes.Learning.emoji);
    }
  },
  Linkedin: {
    emoji: '\u23F0',
    format: function format(data) {
      return getLinkAttribute(data, attributes.Linkedin.emoji);
    },
    title: function title(platform) {
      return getAttributeTitle(platform, attributes.Linkedin.emoji);
    }
  },
  Facebook: {
    emoji: '\uD83D\uDC41',
    format: function format(data) {
      return getLinkAttribute(data, attributes.Facebook.emoji);
    },
    title: function title(platform) {
      return getAttributeTitle(platform, attributes.Facebook.emoji);
    }
  },
  Instagram: {
    emoji: '\uD83D\uDCF8',
    format: function format(data) {
      return getLinkAttribute(data, attributes.Instagram.emoji);
    },
    title: function title(platform) {
      return getAttributeTitle(platform, attributes.Instagram.emoji);
    }
  },
  Twitter: {
    emoji: '\uD83D\uDC25',
    format: function format(data) {
      return getLinkAttribute(data, attributes.Twitter.emoji);
    },
    title: function title(platform) {
      return getAttributeTitle(platform, attributes.Twitter.emoji);
    }
  },
  Email: {
    emoji: '\uD83D\uDCE9',
    format: function format(data) {
      return getContactAttribute(data, attributes.Email.emoji);
    }
  },
  Cell: {
    emoji: '\uD83D\uDCDE',
    format: function format(data) {
      return getContactAttribute(data, attributes.Cell.emoji);
    }
  }
};

exports.default = attributes;
//# sourceMappingURL=attributes.js.map