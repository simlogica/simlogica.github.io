# Configuring Blocker

<img src="/common/images/blocker_feature_graphic.png" style="max-width: 100%; height: auto;" alt="Blocker Feature Banner">

## Configuring Blocker Permissions

Blocker needs two permissions from your Andoid Device to work properly.

### Contacts Permission

Blocker uses contacts permissions to handle the incoming call. The calling number is compared with your Phone Book to see if it is a **Favorite** number, a regular **Contact** in your Phone Book or if it is **Unknown**.

When Blocker runs, it asks for the **Contacts Permission** with a top alert banner. Click that banner and Andoid will ask you to allow that.

<img src="/configure/permissions1.png" style="max-width: 40%; height: auto;" alt="Blocker top banner asking for Contacts access permission">
<img src="/configure/permissions2.png" style="max-width: 40%; height: auto;" alt="Android modal asking you to give Blocker the Contacts access permission">

If you accidentally deny, follow the [Manually allowing Contacts Permission](#manually-allowing-contacts-permission) section.

### Setting Blocker as device's Caller ID and Antispam App

Blocker needs to be your device's **Caller ID and Antispam App** to be allowed to handle incoming calls.

<img src="/configure/permissions3.png" style="max-width: 40%; height: auto;" alt="Blocker top banner asking to be the Caller ID app in your device">
<img src="/configure/permissions4.png" style="max-width: 40%; height: auto;" alt="Android modal asking you to set Blocker as the Caller ID app">

Under the hood, that will allow a tiny and fast native-coded Blocker internal service to be called by the Android System. This service will do its magic based on the rules and sounds you configured in Blocker.

No data is collected, as we are never tired to repeat. Check our [Privacy Policy](../privacy/index.md)

### Manually allowing Contacts Permission

In case you previously denied the **Contacts Permission**, Android demands a bit more manual setup that we make straightforward to follow in four easy steps.

Blocker will ask you for the **Contacts Permission** as usual, but when you click the top banner, the **App's Setup Screen** will come up instead. Click on **Permissions** there:

<img src="/configure/permissions1.png" style="max-width: 40%; height: auto;" alt="Blocker top banner asking for Contacts access permission">
<img src="/configure/permissions5.png" style="max-width: 40%; height: auto;" alt="System App's Setup Screen to allow Contacts access permission step 1">

Then click on **Contacts** and then on **Allow** in the following screen:

<img src="/configure/permissions6.png" style="max-width: 40%; height: auto;" alt="System App's Setup Screen to allow Contacts access permission step 2">
<img src="/configure/permissions7.png" style="max-width: 40%; height: auto;" alt="System App's Setup Screen to allow Contacts access permission step 3">

That is it! Then press the Android's back button three times to go back to Blocker.