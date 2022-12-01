import Head from 'next/head';
import NextLink from 'next/link';
import axios from 'axios';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Card, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';

const terms = () => {


  return (
    <>
      <Head>
        <title>Terminos y condiciones</title>
      </Head>

      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'realtive',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >

        <Container maxWidth="sm">


        <Box sx={{ my: 7 }}>

          <Link href='/'>
            <center><img
            alt="Logo de Retool"
            src="/static/images/logoRetool.png"
            width="200"
            height="200"
            />
            </center>
          </Link>

        </Box>
        <Card sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              Terminos y condiciones
            </Typography>

            <Typography
              color="textPrimary"
              variant="h8"
            >
              según el artículo 10 de la Ley 1581 de 2012, se entiende por datos personales, toda información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
              Retool, como responsable del tratamiento de sus datos personales, le informa que los mismos serán tratados de conformidad con la normatividad vigente en materia de protección de datos personales, en especial la Ley 1581 de 2012 y el Decreto 1377 de 2013.
              De acuerdo a lo anterior y con el fin de garantizar el ejercicio de sus derechos, Retool le informa que sus datos personales serán tratados para las siguientes finalidades:
              Realizar el registro de usuarios en la plataforma Retool.
              Registrar vehiculos en la plataforma Retool.
              Registrar mantenimientos en la plataforma Retool.

              Política de privacidad de Retool
              Para recibir la información sobre sus Datos Personales, la finalidad y las partes con las que se comparte, contacten con el Titular.
              Si necesita más información y quiere conocer sus derechos, puedes visualizar la versión completa de esta política de privacidad clicando en el vínculo en la parte inferior de esta página.

              Clases de Datos recogidos


            </Typography>
            <Typography
              color="textPrimary"
              variant="h8"
            >
              El Titular no proporciona una lista de categorías de Datos Personales recogidos.

La información completa referente a cada categoría de Datos Personales que se recogen se proporciona en las secciones de la presente política de privacidad dedicadas a tal fin o mediante textos explicativos específicos que se muestran antes de la recogida de dichos Datos.
Los Datos Personales podrán ser proporcionados libremente por el Usuario o, en caso de los Datos de Uso, serán recogidos automáticamente cuando se utilice esta Aplicación.
Todos los Datos solicitados por esta Aplicación son obligatorios y la negativa a proporcionarlos podrá imposibilitar que esta Aplicación pueda proceder a la prestación del Servicio. En los casos en los que esta Aplicación indique específicamente que ciertos Datos no son obligatorios, los Usuarios serán libres de no comunicar tales Datos sin que esto tenga consecuencia alguna sobre la disponibilidad o el funcionamiento del Servicio. Los Usuarios que tengan dudas sobre qué Datos son obligatorios pueden contactar con el Titular.
El uso de Cookies - o de otras herramientas de seguimiento - por parte de esta Aplicación o por los titulares de servicios de terceros utilizados por esta Aplicación tiene como finalidad la prestación del Servicio solicitado por el Usuario, además de cualesquiera otras finalidades que se describan en el presente documento y en la Política de Cookies, en caso de estar disponible.

El Usuario asume la responsabilidad respecto de los Datos Personales de terceros que se obtengan, publiquen o compartan a través de esta Aplicación y declara por la presente que tiene el consentimiento de dichos terceros para proporcionar dichos Datos al Titular.

Modalidad y lugar del tratamiento de los Datos recogidos
Modalidades de Tratamiento
El Titular tratará los Datos de los Usuarios de manera adecuada y adoptará las medidas de seguridad apropiadas para impedir el acceso, la revelación, alteración o destrucción no autorizados de los Datos.
El tratamiento de Datos se realizará mediante ordenadores y/o herramientas informáticas, siguiendo procedimientos y modalidades organizativas estrictamente relacionadas con las finalidades señaladas. Además del Titular, en algunos casos podrán acceder a los Datos ciertas categorías de personas autorizadas, relacionadas con el funcionamiento de esta Aplicación (administración, ventas, marketing, departamento jurídico y de administración de sistemas) o contratistas externos que presten servicios al Titular (tales como proveedores externos de servicios técnicos, empresas de mensajería, empresas de hosting, empresas de informática, agencias de comunicación) que serán nombrados por el Titular como Encargados del Tratamiento, si fuera necesario. Se podrá solicitar al Titular en cualquier momento una lista actualizada de dichas personas.

Base jurídica del Tratamiento
El Titular podrá tratar los Datos Personales del Usuario, si se cumple una de las siguientes condiciones:

Cuando los Usuarios hayan dado su consentimiento para una o más finalidades específicas. Aviso: Al amparo de varias legislaciones diferentes, el Titular podrá estar autorizado a tratar los Datos Personales hasta que el Usuario se oponga a ello (“opción de no participación”), sin necesidad de consentimiento o de cualquier otra base jurídica. Sin embargo, esto no será aplicable cuando el tratamiento de los Datos Personales esté sujeto a la normativa europea en materia de protección de Datos Personales;
Cuando la obtención de Datos sea necesaria para el cumplimiento de un contrato con el Usuario y/o cualquier otra obligación precontractual del mismo;
Cuando el tratamiento sea necesario para el cumplimiento de una obligación legal de obligado cumplimiento por parte del Usuario;
Cuando el tratamiento esté relacionado con una tarea ejecutada en interés público o en el ejercicio de competencias oficiales otorgadas al Titular;
Cuando el tratamiento sea necesario con el fin de un interés legítimo perseguido por el Titular o un tercero.
En cualquier caso, el Titular está a su disposición para definir las bases jurídicas específicas que se aplican al tratamiento y en particular, si la obtención de los Datos Personales es un requisito contractual o estatutario o un requisito necesario para formalizar un contrato.

Lugar
Los Datos se tratan en las oficinas del Titular, así como en cualquier otro lugar en el que se encuentren situadas las partes implicadas en dicho proceso de tratamiento.
Dependiendo de la localización de los Usuarios, las transferencias de Datos pueden implicar la transferencia de los Datos de los Usuarios a otro país diferente al suyo propio. Para más información sobre el lugar de tratamiento de dichos Datos transferidos, los Usuarios podrán consultar la sección que contiene los detalles sobre el tratamiento de los Datos Personales.

Los Usuarios también tendrán derecho a conocer las bases legales de las transferencias de Datos a otro país fuera de la Unión Europea o a cualquier organismo internacional que se rija por el Derecho Público Internacional o que esté formado por dos o más países, como la ONU, y además conocer las medidas de seguridad tomadas por el Titular para salvaguardar sus Datos.

En caso de que tuviera lugar dicha transferencia de Datos, los Usuarios podrán obtener más información consultando las secciones relevantes del presente documento o solicitándola al Titular, a través de la información de contacto que aparece en la sección de contacto.

Período de conservación
Los Datos Personales serán tratados y conservados durante el tiempo necesario y para la finalidad por la que han sido recogidos.

Por lo tanto:

Los Datos Personales recogidos para la formalización de un contrato entre el Titular y el Usuario deberán conservarse como tales hasta en tanto dicho contrato se haya formalizado por completo.
Los Datos Personales recogidos en legítimo interés del Titular deberán conservarse durante el tiempo necesario para cumplir con dicha finalidad. Los Usuarios pueden encontrar información específica relacionada con el interés legítimo del Titular consultando las secciones relevantes del presente documento o contactando con el Titular.
El Titular podrá conservar los Datos Personales durante un periodo adicional cuando el Usuario preste su consentimiento a tal tratamiento, siempre que dicho consentimiento siga vigente. Además, el Titular estará obligado a conservar Datos Personales durante un periodo adicional siempre que se precise para el cumplimiento de una obligación legal o por orden que proceda de la autoridad.

Una vez terminado el período de conservación, los Datos Personales deberán eliminarse. Por lo tanto, los derechos de acceso, modificación, rectificación y portabilidad de datos no podrán ejercerse una vez haya expirado dicho periodo.

Los derechos de los Usuarios
Los Usuarios podrán ejercer ciertos derechos con respecto al tratamiento de Datos por parte del Titular.

Especialmente, los Usuarios tienen derecho a hacer lo siguiente:

Retirar su consentimiento en cualquier momento. Los Usuarios tienen derecho a retirar su consentimiento cuando lo hubieran concedido con anterioridad para el tratamiento de sus Datos Personales.
Objeción al tratamiento de sus Datos. Los Usuarios tienen derecho a oponerse al tratamiento de sus Datos si dicho tratamiento se lleva a cabo con arreglo a una base jurídica distinta del consentimiento. Para más información pueden dirigirse a la sección correspondiente más adelante.
Acceso a sus Datos. Los Usuarios tienen derecho a conocer si sus Datos serán tratados por el Titular, a obtener información sobre ciertos aspectos del tratamiento, además de obtener una copia de los Datos objeto del tratamiento.
Verificar y solicitar la modificación. Los Usuarios tienen derecho a verificar la exactitud de sus Datos y solicitar que los mismos se actualicen o corrijan.
Restringir el tratamiento de sus Datos. Los Usuarios tienen derecho, en ciertos supuestos, a restringir el tratamiento de sus Datos. En ese supuesto, el Titular procesará sus Datos con el único propósito de almacenarlos.
Borrar o eliminar los Datos Personales. Los Usuarios tienen derecho, en ciertos supuestos, a obtener la eliminación de sus Datos por parte del Titular.
Recibir sus Datos y transferirlos a otro responsable. Los Usuarios tienen derecho a recibir sus Datos en un formato estándar, estructurado, mecánicamente legible y, si fuera técnicamente posible, a que se dé traslado de los mismos a otro responsable sin ningún impedimento. Esta provisión será de aplicación siempre que los Datos se hayan tratado a través de medios automatizados y que el tratamiento se base en el consentimiento del Usuario, en un contrato del que el Usuario forme parte o que aparezca en las obligaciones precontractuales del mismo.
Poner una reclamación. Los Usuarios tienen derecho a poner una reclamación ante la autoridad competente en materia de protección de datos de carácter personal.
Detalles sobre el derecho de oposición al tratamiento
Cuando el tratamiento de los Datos Personales sea de interés público, en el ejercicio de competencias oficiales otorgadas al Titular o con motivo de un interés legítimo del Titular, los Usuarios podrán oponerse a dicho tratamiento explicando un motivo con relación a su situación particular para justificar su objeción.

Los Usuarios deben saber que, sin embargo, en caso de que sus Datos Personales sean tratados con fines comerciales, pueden oponerse en cualquier momento a tal tratamiento sin necesidad de justificación. Para saber si los Datos Personales de los Usuarios están siendo tratados por parte del Titular para fines comerciales, éstos deberán consultar las secciones relevantes del presente documento.

Cómo ejercer estos derechos
Cualquier solicitud para ejercer los derechos del Usuario puede dirigirse al Titular a través de los datos de contacto facilitados en el presente documento. Dichas solicitudes serán tramitadas por el Titular sin coste alguno tan pronto como le sea posible y siempre dentro del plazo de un mes.

Información adicional sobre la recogida de Datos y su tratamiento
Defensa jurídica
Los Datos Personales del Usuario podrán ser utilizados para la defensa jurídica del Titular ante un tribunal o en las fases judiciales previas a un posible pleito derivado del uso inapropiado de esta Aplicación o de los Servicios relacionados.
El Usuario declara conocer que el Titular puede ser requerido por las autoridades públicas a fin de revelar Datos Personales.

Información adicional acerca de los Datos Personales del Usuario
Además de las informaciones contenidas en esta política de privacidad, esta Aplicación podrá proporcionar al Usuario información adicional y contextual relativa a Servicios específicos o a la recogida y tratamiento de los Datos Personales.

Log del sistema y mantenimiento
Por motivos relativos al funcionamiento y mantenimiento, esta Aplicación y cualquier otro servicio, proporcionado por terceros, que se utilice, podrá recoger un registro del sistema; es decir, archivos que registren la interacción con esta Aplicación y que puedan contener Datos Personales, tales como la dirección IP del Usuario.

Información no contenida en esta política de privacidad
Se podrá solicitar en cualquier momento información adicional sobre la recogida y el tratamiento de los Datos Personales al Titular. La información de contacto se indica al inicio del presente documento.

Cómo se procesan las solicitudes “Do Not Track”
Esta Aplicación no permite solicitudes “Do Not Track”.
Para determinar si cualquiera de los servicios de terceros que utiliza acepta solicitudes “Do Not Track”, por favor lea sus políticas de privacidad.

Modificación de la presente política de privacidad
El Titular se reserva el derecho de modificar esta política de privacidad en cualquier momento, notificándolo a los Usuarios a través de esta página y, a ser posible, a través de esta Aplicación y/o de ser técnica y legalmente posible notificando directamente a los Usuarios, en caso de que el Titular cuente con la información de contacto necesaria a tal fin. Se recomienda encarecidamente que revisen esta página con frecuencia, tomando como referencia la fecha de la última actualización indicada al final de la página.

En el caso de que los cambios afectasen a las actividades de tratamiento realizadas en base al consentimiento del Usuario, el Titular deberá obtener, si fuera necesario, el nuevo consentimiento del Usuario.
    </Typography>
            </Box>
        </Card>
        <Typography
              color="textSecondary"
              variant="body2"
            >
              Un vez que Lea los terminos y condiciones, proceda a realizar el registro.
              {' '}
              <NextLink
                href="/register"
              >
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Registrate aquí
                </Link>
              </NextLink>
            </Typography>
        </Container>
      </Box>
    </>
  );
};

export default terms;
