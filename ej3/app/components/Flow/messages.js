/*
 * Messages
 *
 * This contains all the text for the auth component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  error:{
    subsidiary:{
      id: 'boilerplate.components.Flow.error.subsidiary',
      defaultMessage: 'You must select a Company form the list.',
    },
    create:{
      id: 'boilerplate.components.Flow.error.create',
      defaultMessage: 'All fields must be filled',
    }
  },
  button:{
    create: {
      id: 'boilerplate.components.Flow.button.create',
      defaultMessage: 'Create',
    },
    back: {
      id: 'boilerplate.components.Flow.button.back',
      defaultMessage: 'Go Back',
    },
    remove: {
      id: 'boilerplate.components.Flow.button.remove',
      defaultMessage: 'Remove',
    },
    cancel: {
      id: 'boilerplate.components.Flow.button.cancel',
      defaultMessage: 'Cancel',
    },
  },
  input: {
    name: {
      id: 'boilerplate.components.Flow.input.name',
      defaultMessage: 'Name, eg. Salesman, Backoffice',
    },
    fileName: {
      id: 'boilerplate.components.Flow.input.fileName',
      defaultMessage: 'eg. job_6507.py',
    },
    subsidiary: {
      id: 'boilerplate.components.Flow.input.subsidiary',
      defaultMessage: 'Company',
    },
  },
  dialog:{
    remove:{
      title:{
        id: 'boilerplate.components.Flow.dialog.remove.title',
        defaultMessage: 'Delete the profile "{profile}" from your account?',
      },
      text:{
        id: 'boilerplate.components.Flow.dialog.remove.text',
        defaultMessage: `{listings,
          plural,
          =0 {You will be not able to sync listings anymore with this profile.}
          one {We still have an active listing sync to this profile. If you remove this profile, Emi won't contact candidates anymore of that listing.}
          other {We still have some active listings synced to this profile. If you remove this profile, Emi won't contact candidates anymore from that listings.}}. Are you sure?`,

      }
    }
  },
  table:{
    id:{
      id: 'boilerplate.components.Flow.table.id',
      defaultMessage: 'ID',
    },
    company:{
      id: 'boilerplate.components.Flow.table.company',
      defaultMessage: 'Company',
    },
    name:{
      id: 'boilerplate.components.Flow.table.name',
      defaultMessage: 'Flow Name',
    },
    fileName:{
      id: 'boilerplate.components.Flow.table.fileName',
      defaultMessage: 'File Name',
    },
    listings:{
      id: 'boilerplate.components.Flow.table.listings',
      defaultMessage: '# Listings',
    },
    country:{
      id: 'boilerplate.components.Flow.table.country',
      defaultMessage: 'Country',
    },
    delete:{
      id: 'boilerplate.components.Flow.table.delete',
      defaultMessage: 'Delete',
    },
  }
});
