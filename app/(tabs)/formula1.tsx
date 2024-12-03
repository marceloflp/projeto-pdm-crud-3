import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function FormulaOneScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#300100', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/f1-logo-4.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fórmula 1</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle" style={styles.corrida}>
          Último GP - BRASIL
          
        </ThemedText>
        <Image
          source={require('@/assets/images/PodioF1Brasil2024-4.jpeg')}
          style={styles.imagemCorrida}
        />
        <ThemedView>
          <ThemedText type="defaultSemiBold" style={styles.podioSessao} >PÓDIO</ThemedText>
          <ThemedView style={styles.podio}>
          <ThemedText>1st- Max Vestappend {'(Red Bull)'}</ThemedText>
          <ThemedText>2st- Esteban Ocon {'(Alpine)'}</ThemedText>
          <ThemedText>3st- Pierre Gasly {'(Alpine)'}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.tituloSessao}>Próximas Corridas</ThemedText>
        <ThemedText type="subtitle" style={styles.corrida}>
          Las Vegas
        </ThemedText>
        <Image
          source={require('@/assets/images/lasVegas.jpeg')}
          style={styles.imagemCorrida}
        />
        <ThemedText type="defaultSemiBold">Quinta-feira – 21/11/2024:</ThemedText>
        <ThemedText>23h30 às 00h30 – Treino Livre 1</ThemedText>
        <ThemedText type="defaultSemiBold">Sexta-feira – 22/11/2024:</ThemedText>
        <ThemedText>3h às 4h – Treino Livre 2</ThemedText>
        <ThemedText type="defaultSemiBold">Sábado – 23/11/2024:</ThemedText>
        <ThemedText>3h às 4h – Qualificação</ThemedText>
        <ThemedText type="defaultSemiBold">Domingo – 24/11/2024:</ThemedText>
        <ThemedText>3h – Corrida</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.corrida}>
        Catar
        </ThemedText>
        <Image
          source={require('@/assets/images/qatar.jpeg')}
          style={styles.imagemCorrida}
        />
        <ThemedText type="defaultSemiBold">Sexta-feira – 29/11/2024:</ThemedText>
        <ThemedText>10h30 às 11h30 – Treino Livre 1</ThemedText>
        <ThemedText>11h30 às 12h14 – Qualificação Sprint</ThemedText>
        <ThemedText type="defaultSemiBold">Sábado – 30/11/2024:</ThemedText>
        <ThemedText>10h – Sprint</ThemedText>
        <ThemedText>14h às 15h – Qualificação</ThemedText>
        <ThemedText type="defaultSemiBold">Domingo – 01/12/2024:</ThemedText>
        <ThemedText>14h – Corrida</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.corrida}>
          Abu Dhabi
        </ThemedText>
        <Image
          source={require('@/assets/images/abuDhabi.jpeg')}
          style={styles.imagemCorrida}
        />
        <ThemedText type="defaultSemiBold">Sexta-feira – 06/12/2024:</ThemedText>
        <ThemedText>6h30 às 7h30 – Treino Livre 1</ThemedText>
        <ThemedText>10h às 11h – Treino Livre 2</ThemedText>
        <ThemedText type="defaultSemiBold">Sábado – 07/12/2024:</ThemedText>
        <ThemedText>7h30 às 8h30 – Treino Livre 3</ThemedText>
        <ThemedText>11h às 12h – Qualificação</ThemedText>
        <ThemedText type="defaultSemiBold">Domingo – 08/12/2024:</ThemedText>
        <ThemedText>10h – Corrida</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    top: 35,
  },
  reactLogo: {
    height:90,
    width: 350,
    bottom: 70,
    alignSelf: 'center',
    position: 'absolute',
  },
  tituloSessao:{
    alignItems: 'center',
    alignSelf: 'center',
  },
  corrida: {
    
  },
  imagemCorrida:{
    width: 225,
    height:300,
    alignSelf: 'center',
  },
  podioSessao:{
    alignSelf: 'center',
  },
  podio:{
    alignSelf: 'center',
  }
});
