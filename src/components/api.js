import halkarz from './data';

export const getHalkarz = async () => {
  try {
    return halkarz;
  } catch (error) {
    console.error('Hata:', error);
    return [];
  }
};

export const getHalkarzById = (id) => {
  try {
    const arz = halkarz.find(item => item.id === parseInt(id));
    if (!arz) {
      throw new Error(`ID'si ${id} olan halka arzı bulunamadı.`);
    }
    return arz; 
  } catch (error) {
    console.error('Hata:', error);
    return null;
  }
};

