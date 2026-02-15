    export default class Env {

     // Add your environment variables here
     // Using local mock server to avoid external network dependencies
      public static BaseUrl = 'http://localhost:8080/login.html';
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
