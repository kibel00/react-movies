import { StringSchema } from 'yup';

declare module 'yup' {
    class StringSchema {
        firstCapLetter(): this;
    }
}