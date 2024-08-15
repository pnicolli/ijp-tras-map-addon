(function ijpRegionsMap($) {
  var regions = {
    _somaliland: { name: 'Somaliland', region: '' },
    ae: {
      name: 'United Arab Emirates',
      region: 'Europe - East',
      ra: 'Yuval Tzur',
    },
    af: { name: 'Afghanistan', region: '' },
    al: {
      name: 'Albania',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    am: { name: 'Armenia', region: '' },
    ao: { name: 'Angola', region: '' },
    ar: {
      name: 'Argentina',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    at: {
      name: 'Austria',
      region: 'Germany & Austria',
      ra: 'Philip Ockelmann',
    },
    au: {
      name: 'Australia',
      region: 'Australia & New Zealand',
      ra: 'Tom Wood',
    },
    az: { name: 'Azerbaijan', region: '' },
    ba: {
      name: 'Bosnia and Herzegowina',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    bd: { name: 'Bangladesh', region: '' },
    be: { name: 'Belgium', region: 'BeNeLux', ra: 'Arjen De Jong' },
    bf: { name: 'Burkina Faso', region: '' },
    bg: {
      name: 'Bulgaria',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    bi: { name: 'Burundi', region: '' },
    bj: { name: 'Benin', region: '' },
    bn: { name: 'Brunei', region: '' },
    bo: {
      name: 'Bolivia',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    br: { name: 'Brazil', region: 'Brazil', ra: 'Lu Cordeiro' },
    bs: { name: 'Bahamas', region: '' },
    bt: { name: 'Bhutan', region: '' },
    bw: { name: 'Botswana', region: '' },
    by: { name: 'Belarus', region: '' },
    bz: { name: 'Belize', region: '' },
    ca: { name: 'Canada', region: '' },
    cd: { name: 'Democratic Republic of the Congo', region: '' },
    cf: { name: 'Central African Republic', region: '' },
    cg: { name: 'Congo', region: '' },
    ch: { name: 'Switzerland', region: '' },
    ci: { name: "Cote d'Ivoire", region: '' },
    cl: {
      name: 'Chile',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    cm: { name: 'Cameroon', region: '' },
    cn: { name: 'China', region: '' },
    co: {
      name: 'Colombia',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    cr: {
      name: 'Costa Rica',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    cu: { name: 'Cuba', region: '' },
    cy: { name: 'Cyprus', region: 'Europe - East', ra: 'Yuval Tzur' },
    cz: { name: 'Czech', region: 'Europe - Central', ra: 'Anna Zielinska' },
    de: {
      name: 'Germany',
      region: 'Germany & Austria',
      ra: 'Philip Ockelmann',
    },
    dj: { name: 'Djibouti', region: '' },
    dk: { name: 'Denmark', region: 'Europe - North', ra: 'Lars Harald Nordli' },
    do: {
      name: 'Dominican Republic',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    dz: { name: 'Algeria', region: '' },
    ec: {
      name: 'Ecuador',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    ee: { name: 'Estonia', region: 'Europe - North', ra: 'Lars Harald Nordli' },
    eg: { name: 'Egypt', region: '' },
    eh: { name: 'West Sahara', region: '' },
    er: { name: 'Eritrea', region: '' },
    es: { name: 'Spain', region: 'Iberia', ra: 'Nacio Perez Janeiro' },
    et: { name: 'Ethiopia', region: '' },
    fi: { name: 'Finland', region: '' },
    fj: { name: 'Fiji', region: '' },
    fk: { name: 'Falkland Islands', region: '' },
    fr: { name: 'France', region: 'France', ra: 'Sophie Pages' },
    ga: { name: 'Gabon', region: '' },
    gb: { name: 'United Kingdom', region: '' },
    ge: { name: 'Georgia', region: '' },
    gh: { name: 'Ghana', region: '' },
    gl: { name: 'Greenland', region: '' },
    gm: { name: 'Gambia', region: '' },
    gn: { name: 'Guinea', region: '' },
    gq: { name: 'Equatorial Guinea', region: '' },
    gr: { name: 'Greece', region: 'Europe - East', ra: 'Yuval Tzur' },
    gt: {
      name: 'Guatemala',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    gw: { name: 'Guinea-Bissau', region: '' },
    gy: { name: 'Guyana', region: 'France', ra: 'Sophie Pages' },
    hn: {
      name: 'Honduras',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    hr: {
      name: 'Croatia',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    ht: { name: 'Haiti', region: '' },
    hu: { name: 'Hungary', region: 'Europe - Central', ra: 'Anna Zielinska' },
    id: { name: 'Indonesia', region: 'Andaman Sea', ra: 'Wendra Kamadjaja' },
    ie: { name: 'Ireland', region: '' },
    il: { name: 'Israel', region: 'Europe - East', ra: 'Yuval Tzur' },
    in: { name: 'India', region: '' },
    iq: { name: 'Iraq', region: '' },
    ir: { name: 'Iran', region: '' },
    is: { name: 'Iceland', region: 'Europe - North', ra: 'Lars Harald Nordli' },
    it: { name: 'Italy', region: 'Italy & Malta', ra: 'Jacopo Strati' },
    jm: { name: 'Jamaica', region: '' },
    jo: { name: 'Jordan', region: '' },
    jp: { name: 'Japan', region: 'Japan', ra: 'Mitsunori Makino' },
    ke: { name: 'Kenya', region: '' },
    kg: { name: 'Kyrgyzstan', region: '' },
    kh: { name: 'Cambodia', region: '' },
    kp: { name: 'North Korea', region: '' },
    kr: { name: 'South Korea', region: '' },
    kw: { name: 'Kuwait', region: 'Europe - East', ra: 'Yuval Tzur' },
    kz: { name: 'Kazakhstan', region: '' },
    la: { name: 'Laos', region: '' },
    lb: { name: 'Lebanon', region: '' },
    lk: { name: 'Sri Lanka', region: '' },
    lr: { name: 'LIberia', ra: 'Nacio Perez Janeiro', region: '' },
    ls: { name: 'Lesotho', region: '' },
    lt: {
      name: 'Lithuania',
      region: 'Europe - North',
      ra: 'Lars Harald Nordli',
    },
    lu: { name: 'Luxembourg', region: 'BeNeLux', ra: 'Arjen De Jong' },
    lv: { name: 'Latvia', region: 'Europe - North', ra: 'Lars Harald Nordli' },
    ly: { name: 'Libya', region: '' },
    ma: { name: 'Morocco', region: 'France', ra: 'Sophie Pages' },
    md: { name: 'Moldova', region: '' },
    me: {
      name: 'Montenegro',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    mg: { name: 'Madagascar', region: '' },
    mk: { name: 'Macedonia', region: 'Europe - East', ra: 'Yuval Tzur' },
    ml: { name: 'Mali', region: '' },
    mm: { name: 'Myanmar', region: '' },
    mn: { name: 'Mongolia', region: '' },
    mr: { name: 'Mauritania', region: '' },
    mw: { name: 'Malawi', region: '' },
    mx: {
      name: 'Mexico',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    my: { name: 'Malaysia', region: 'South China Sea', ra: 'Reuben Ferrer' },
    mz: { name: 'Mozambique', region: '' },
    na: { name: 'Namibia', region: '' },
    nc: { name: 'New Caledonia', region: '' },
    ne: { name: 'Niger', region: '' },
    ng: { name: 'Nigeria', region: '' },
    ni: {
      name: 'Nicaragua',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    nl: { name: 'Netherlands', region: 'BeNeLux', ra: 'Arjen De Jong' },
    no: { name: 'Norway', region: 'Europe - North', ra: 'Lars Harald Nordli' },
    np: { name: 'Nepal', region: '' },
    nz: {
      name: 'New Zealand',
      region: 'Australia & New Zealand',
      ra: 'Tom Wood',
    },
    om: { name: 'Oman', region: '' },
    pa: {
      name: 'Panama',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    pe: {
      name: 'Peru',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    pg: { name: 'Papua New Guinea', region: '' },
    ph: { name: 'Philippines', region: 'South China Sea', ra: 'Reuben Ferrer' },
    pk: { name: 'Pakistan', region: '' },
    pl: { name: 'Poland', region: 'Europe - Central', ra: 'Anna Zielinska' },
    pr: {
      name: 'Puerto Rico',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    ps: { name: 'Palestine', region: '' },
    pt: { name: 'Portugal', region: 'Iberia', ra: 'Nacio Perez Janeiro' },
    py: {
      name: 'Paraguay',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    qa: { name: 'Qatar', region: 'Europe - East', ra: 'Yuval Tzur' },
    ro: {
      name: 'Romania',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    rs: { name: 'Serbia', region: 'Europe - Adriatic', ra: 'Milorad Pavlović' },
    ru: { name: 'Russia', region: '' },
    rw: { name: 'Rwanda', region: '' },
    sa: { name: 'Saudi Arabia', region: 'Europe - East', ra: 'Yuval Tzur' },
    sb: { name: 'Solomon Islands', region: '' },
    sd: { name: 'Sudan', region: '' },
    se: { name: 'Sweden', region: 'Europe - North', ra: 'Lars Harald Nordli' },
    sg: { name: 'Singapore', region: '' },
    si: {
      name: 'Slovenia',
      region: 'Europe - Adriatic',
      ra: 'Milorad Pavlović',
    },
    sk: { name: 'Slovakia', region: 'Europe - Central', ra: 'Anna Zielinska' },
    sl: { name: 'Sierra Leone', region: '' },
    sn: { name: 'Senegal', region: '' },
    so: { name: 'Somalia', region: '' },
    sr: { name: 'Suriname', region: '' },
    ss: { name: 'South Sudan', region: '' },
    sv: {
      name: 'El Salvador',
      region: 'Hispanic America - North',
      ra: 'Herbert Zurita',
    },
    sy: { name: 'Syria', region: '' },
    sz: { name: 'Swaziland', region: '' },
    td: { name: 'Chad', region: '' },
    tf: { name: 'Fr. S. Antarctic Lands', region: '' },
    tg: { name: 'Togo', region: '' },
    th: { name: 'Thailand', region: 'Andaman Sea', ra: 'Wendra Kamadjaja' },
    tj: { name: 'Tajikistan', region: '' },
    tl: { name: 'Timor-Leste', region: '' },
    tm: { name: 'Turkmenistan', region: '' },
    tn: { name: 'Tunisia', region: '' },
    tr: { name: 'Turkey', region: 'Europe - East', ra: 'Yuval Tzur' },
    tt: { name: 'Trinidad and Tobago', region: '' },
    tw: { name: 'Taiwan', region: '' },
    tz: { name: 'Tanzania', region: '' },
    ua: { name: 'Ukraine', region: '' },
    ug: { name: 'Uganda', region: '' },
    us: { name: 'United States', region: '' },
    uy: {
      name: 'Uruguay',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    uz: { name: 'Uzbekistan', region: '' },
    ve: {
      name: 'Venezuela',
      region: 'Hispanic America - South',
      ra: 'Adrian Estoup',
    },
    vn: { name: 'Vietnam', region: '' },
    vu: { name: 'Vanuatu', region: '' },
    ye: { name: 'Yemen', region: '' },
    za: { name: 'South Africa', region: '' },
    zm: { name: 'Zambia', region: '' },
    zw: { name: 'Zimbabwe', region: '' },
  };

  function getCountryCodesFromRegion(region) {
    return Object.keys(regions).filter(function (code) {
      return regions[code].region === region;
    });
  }

  $(function () {
    Object.keys(regions).forEach(function (code) {
      $(document).on('mouseenter', '.ijp-tras-map #' + code, function () {
        if (regions[code].region === '') return;
        getCountryCodesFromRegion(regions[code].region).forEach(function (c) {
          $('#' + c).addClass('hovered');
        });
        var tooltip = document.querySelector('#ijp-map-tooltip');
        $(tooltip).append(
          '<div class="region">' + regions[code].region + '</div>'
        );
        $(tooltip).append('<div class="ra">' + regions[code].ra + '</div>');
        tooltip.style.display = 'block';
        FloatingUIDOM.computePosition(
          document.querySelector('.ijp-tras-map #' + code),
          tooltip,
          {
            middleware: [
              FloatingUIDOM.flip(),
              FloatingUIDOM.shift(),
              FloatingUIDOM.offset(10),
            ],
          }
        ).then(function ({ x, y }) {
          Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      });

      $(document).on('mouseleave', '.ijp-tras-map #' + code, function () {
        if (regions[code].region === '') return;
        getCountryCodesFromRegion(regions[code].region).forEach(function (c) {
          $('#' + c).removeClass('hovered');
        });
        var tooltip = document.querySelector('#ijp-map-tooltip');
        tooltip.style.display = '';
        $(tooltip).find('div').remove();
      });
    });
  });
})(jQuery);
