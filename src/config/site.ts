// Preencha somente com dados confirmados. Estes valores são usados no build.
export const site = {
  name: 'AMDLEMOS',
  title: 'AMDLEMOS — Sites profissionais para empresas de Maringá',
  description: 'Criação de sites institucionais, SEO local, desempenho e suporte para pequenas empresas de Maringá e região. Converse sobre o site da sua empresa.',
  origin: '', // Origem pública HTTPS, sem caminho, consulta ou fragmento.
  whatsapp: '', // Número real com DDI e DDD, somente dígitos.
  phone: '', // Telefone real no formato de apresentação.
  email: '',
  address: '',
  cnpj: '',
  cymhUrl: 'https://cymhseguros.com.br/', // URL HTTPS real do projeto; não inferir pelo nome.
  socialImage: '', // Caminho local de uma imagem PNG/JPEG/WebP confirmada.
};

function httpsUrl(value: string, label: string): string {
  if (!value.trim()) return '';
  const url = new URL(value.trim());
  if (url.protocol !== 'https:' || url.username || url.password) {
    throw new Error(label + ' deve ser uma URL HTTPS sem credenciais.');
  }
  return url.href;
}

const configuredOrigin = httpsUrl(site.origin, 'site.origin');
if (configuredOrigin) {
  const url = new URL(configuredOrigin);
  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error('site.origin deve conter somente a origem pública.');
  }
}
export const origin = configuredOrigin ? new URL(configuredOrigin).origin : '';
if (site.whatsapp && !/^[1-9]\d{9,14}$/.test(site.whatsapp)) {
  throw new Error('site.whatsapp deve ter entre 10 e 15 dígitos, incluindo DDI e DDD.');
}
export const whatsappUrl = site.whatsapp ? 'https://wa.me/' + site.whatsapp : '';
export const cymhUrl = httpsUrl(site.cymhUrl, 'site.cymhUrl');
