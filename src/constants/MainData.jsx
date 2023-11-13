const PersonalInfo = [
    /* Personal Details */
    {
      name: 'text1',
      label: 'Full Name',
      default: 'Josephine Myers',
      type: 'text',
      placeholder: 'First and Last name'
    },
    {
      name: 'text2',
      label: 'Email Me Now',
      default: 'JosephineMyers@mailadd.com',
      type: 'email',
      placeholder: 'Enter Email'
    },
    {
      name: 'text3',
      label: 'phone number',
      default: '20804820840',
      type: 'tel',
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{1}",
      placeholder: 'Enter Phone Number'
      
    },
    {
      name: 'text4',
      label: 'Address',
      default: 'London, UK',
      type: 'text',
      placeholder: 'Enter Address'
    },

];

const EducationInfo = [
    /* Education Info */
    {
      name: 'text5',
      label: 'School',
      default: 'London City University',
      type: 'text',
      placeholder: 'Enter School / University'
    },
    {
      name: 'text6',
      label: 'Degree',
      default: 'Bachelors in Economics',
      type: 'text',
      placeholder: 'Enter Degree / Field Of Study'
    },
    {
      name: 'text7',
      label: 'Start Date',
      default: '08/2020',
      type: 'date',
      format: 'MM-dd',
      placeholder: 'Enter Start Date'
    },
    {
      name: 'text8',
      label: 'End Date',
      default: '08/2020',
      type: 'date',
      placeholder: 'Enter End Date'
    },{
      name: 'text9',
      label: 'Location',
      default: 'New York City, US',
      type: 'text',
      placeholder: 'Enter Location'
    },
];

const ExperienceInfo = [
    /* Experience Info */
    {
      name: 'text10',
      label: 'Company Name',
      default: 'Umbrella Inc.',
      type: 'text',
      placeholder: 'Enter Company Name'
    },
    {
      name: 'text11',
      label: 'Position Title',
      default: 'Enter School',
      type: 'text',
      placeholder: 'Enter Position Title'
    },
    {
      name: 'text12',
      label: 'Start Date',
      default: '08/2020',
      type: 'date',
      placeholder: 'Enter Start Date'
    },
    {
      name: 'text13',
      label: 'End Date',
      default: '08/2020',
      type: 'date',
      placeholder: 'Enter End Date'
    },
    {
      name: 'text14',
      label: 'Location',
      default: 'London City University',
      type: 'text',
      placeholder: 'Enter Location'
    },
    {
      name: 'text15',
      label: 'Description',
      default: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
     
      placeholder: 'Enter Description',
      type: 'textarea'
    },
  ];

  export {PersonalInfo, EducationInfo, ExperienceInfo};