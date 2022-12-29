# Internationalization


Press UI uses Chinese as the default language. If you want to use other languages, please follow the instructions below.

## Usage

### Switch languages

Use the `locale.use` method to switch the currently used language. The following takes English as an example:


```ts
import locale from '@tencent/press-ui/locale';
// import the English language pack
import enUS from '@tencent/press-ui/locale/lang/en-US';

locale.use(enUS);
```


### Override default configs


Use `locale.add` method to modify the default configs.

```ts
import locale from '@tencent/press-ui/locale';

const messages = {
  'en-US': {
    picker: {
      confirm: 'Close',
    },
  },
};

locale.add(messages);
```

### Config files

Current supported languages:

| Language | Filename |
| -------- | -------- |
| Chinese  | zh-CN    |
| English  | en-US    |