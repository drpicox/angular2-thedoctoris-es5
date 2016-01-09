NG2 - The Doctor Is - ES5
==========================

This is a initial demo of an scalable Angular2 Application.

Note: You may be interested in the Typescript version at https://github.com/drpicox/angular2-thedoctoris-ts.


Description
-----------

### Behavior

This demo has only one component: [TheDoctorIsComponent](src/thedoctoris/TheDoctorIsComponent.js)

```html
<tdi-the-doctor-is></tdi-the-doctor-is>
```

that shows a text if the doctor is in or not.


It also defines two services, one is the [Doctor](src/thedoctoris/Doctor.js) and the other one a [Booth](src/thedoctoris/Booth.js). 
When the component is instantated it uses the `Booth` to call which makes the `Doctor` come.

This example shows DI from services to services and services to Components.


### Module

It also defines a module [thedoctoris](src/thedoctoris/index.js) which exports all public elements: 

- `TheDoctorIsComponent`
- and `THEDOCTORIS_PROVIDERS` which lists the providers needed to work properly


### Boot

Everything is compiled through browserify. 
The boot is executed by the [index.html](src/index.html) which executes:

```html
<script>
   window.boot();
</script>

The boot is defined in the [boot.ts](src/boot.js) file and attached to window by the main [index.ts](src/index.js) script.
