# Instrucciones para probar Dokku localmente

Puedes probar el funcionamiento de Dokku sin depender de un VPS y un dominio propio, para ello haremos uso de
[Vagrant](http://codehero.co/como-instalar-y-configurar-vagrant/).

> Se recomienda usar una versión de Vagrant >=1.5.1

## Paso 1

En nuestro equipo anfitrión debemos resolver el dominio que servirá de DNS.

Para ello editaremos el archivo `/etc/hosts` y colocaremos algo así:

```
192.168.33.10   servidordokku.com
192.168.33.10   prueba-dokku.servidordokku.com
```

Esto indicará que dichos dominios deben ser resueltos a dirigirse a la dirección IP indicada (está es la misma que tendrá nuestra máquina virtual de Vagrant). Para no complicarnos tratando de agregar el subdominio *wildcard* (`*.servidordokku.com`) agregamos la segunda linea, esto quiere decir que la aplicación que subamos debe llevar dicho nombre (`prueba-dokku`) para que sea asignada a este subdominio.

## Paso 2

Modificamos la redirección de puertos SSH para este nuevo dominio en nuestro equipo anfitrión.

Debido a que Vagrant le asigna el puerto `2222` en lugar del `22` a sus instancias virtuales debemos realizar dicho cambio agregando lo siguiente al archivo `~/.ssh/config`:

```
Host servidordokku
 Port 2222
```

## Paso 3

Clonamos este repositorio y levantamos nuestro ambiente invitado de Vagrant ejecutando `vagrant up` en este directorio.

En este repositorio se encuentra un `Vagrantfile` que le indicará a Vagrant la configuración necesaria para instalar Dokku y configurar gran parte de lo que hicimos manualmente en la entrada del blog.
Esto puede tardar varios minutos la primera vez ya que Vagrant debe descargar la *caja* del Ubuntu 12.04 LTS 64bit, construir el ambiente y descargar Dokku.

## Paso 4

Finalmente debemos pasar las llaves SSH de nuestro equipo anfitrión al invitado Vagrant.

Para ello nos dirigimos al anfitrión y ejecutamos el siguiente comando:

```
$ cat ~/.ssh/id_rsa.pub | ssh -i ~/.vagrant.d/insecure_private_key vagrant@servidordokku.com "sudo sshcommand acl-add dokku codehero"
```

## Paso 5

Sigue con la sección de **Prueba** de la [entrada del Blog](http://codehero.co/como-instalar-y-utilizar-dokku/) y disfruta de tu Dokku local.
