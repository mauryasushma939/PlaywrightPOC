    export default class Env {

     // Add your environment variables here
      public static BaseUrl = 'https://www.saucedemo.com/';
      private static loginID = 'standard_user';
      private static password = 'secret_sauce'

      public static get ValidLoginID(): string {
        return this.loginID;
      }

      public static get ValidPassword(): string {
        return this.password;
      }

      public static get ValidUsername(): string {
        return this.loginID;
      }

    }
