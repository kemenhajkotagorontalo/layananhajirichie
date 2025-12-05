import React from 'react';
import { X } from 'lucide-react';

interface PengumumanSeleksiProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DataPeserta {
  no: number;
  nama: string;
  jenisTugas: string;
  nilaiAdm: number;
  nilaiCat: number;
  nilaiTotal: number;
}

const dataHasilSeleksi: DataPeserta[] = [
  { no: 1, nama: "MUNKIZUL UMAM KAU", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 18, nilaiCat: 41.4, nilaiTotal: 59.4 },
  { no: 2, nama: "MOCHAMAD SOGHIR", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 6, nilaiCat: 40.8, nilaiTotal: 46.8 },
  { no: 3, nama: "JOHANSYAH", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 8, nilaiCat: 36.6, nilaiTotal: 44.6 },
  { no: 4, nama: "WAHYUDIN HIODA", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 14, nilaiCat: 44.4, nilaiTotal: 58.4 },
  { no: 5, nama: "NANSI ZAKARIA", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 20, nilaiCat: 42.6, nilaiTotal: 62.6 },
  { no: 6, nama: "SABARUDIN", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 16, nilaiCat: 31.8, nilaiTotal: 47.8 },
  { no: 7, nama: "SUTARJO PAPUTUNGAN", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 16, nilaiCat: 36.6, nilaiTotal: 52.6 },
  { no: 8, nama: "AISYA PUSPITA MARGARETH JASSIN", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 8, nilaiCat: 32.4, nilaiTotal: 40.4 },
  { no: 9, nama: "MASNIHAYA", jenisTugas: "Pembimbing Ibadah Kloter", nilaiAdm: 22, nilaiCat: 21.6, nilaiTotal: 43.6 },
  { no: 10, nama: "RIZALUDDIN TILOLANGO", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 6, nilaiCat: 31.2, nilaiTotal: 37.2 },
  { no: 11, nama: "VERAWATI S. DEHI", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 6, nilaiCat: 35.4, nilaiTotal: 41.4 },
  { no: 12, nama: "HERLINA AHMAD", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 16, nilaiCat: 29.4, nilaiTotal: 45.4 },
  { no: 13, nama: "FANDY NAUE", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 6, nilaiCat: 49.8, nilaiTotal: 55.8 },
  { no: 14, nama: "MUHAMMAD NAWIR THAMRIN", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 4, nilaiCat: 48, nilaiTotal: 52 },
  { no: 15, nama: "NURJANNAH HARUN", jenisTugas: "Pembimbing Ibadah Kloter", nilaiAdm: 26, nilaiCat: 28.8, nilaiTotal: 54.8 },
  { no: 16, nama: "ELVINA MOHAMMAD", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 6, nilaiCat: 25.8, nilaiTotal: 31.8 },
  { no: 17, nama: "MOHAMAD SYAHRIL PANEO", jenisTugas: "Pelayanan Akomodasi", nilaiAdm: 6, nilaiCat: 1.8, nilaiTotal: 7.8 },
  { no: 18, nama: "ISMAIL", jenisTugas: "Ketua Kloter", nilaiAdm: 16, nilaiCat: 38.4, nilaiTotal: 54.4 },
  { no: 19, nama: "ABDUL MOHAMAD", jenisTugas: "Pelayanan Konsumsi", nilaiAdm: 6, nilaiCat: 28.8, nilaiTotal: 34.8 },
];



const PengumumanSeleksi: React.FC<PengumumanSeleksiProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gold-500/20">
        
        {/* Header */}
        <div className="bg-black-900 p-4 flex justify-between items-center text-white border-b border-gold-600 shrink-0">
          <div>
            <h3 className="font-bold text-lg">Pengumuman Hasil Seleksi ADM & CAT Tahap I</h3>
            <p className="text-gold-500 text-sm">PPIH Kloter Kota Gorontalo - Tahun 1447H/2026M</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Tutup"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          <div className="mb-4 p-4 bg-gold-50 border border-gold-200 rounded-xl text-center">
            <p className="font-bold text-black-900">Panitia Seleksi Calon Petugas Haji Kota Gorontalo</p>
            <p className="text-sm text-gray-600 mt-1">Website ini dibuat untuk membantu dalam proses monitoring hasil seleksi Calon Petugas Haji</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-black-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">No</th>
                    <th className="px-4 py-3 text-left font-semibold">Nama Lengkap</th>
                    <th className="px-4 py-3 text-left font-semibold">Jenis Tugas</th>
                    <th className="px-4 py-3 text-center font-semibold">Nilai ADM</th>
                    <th className="px-4 py-3 text-center font-semibold">Nilai CAT</th>
                    <th className="px-4 py-3 text-center font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dataHasilSeleksi.map((peserta) => (
                    <tr 
                      key={peserta.no} 
                      className="hover:bg-gold-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-bold text-gray-600">{peserta.no}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{peserta.nama}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          peserta.jenisTugas === 'Pelayanan Akomodasi' ? 'bg-blue-100 text-blue-700' :
                          peserta.jenisTugas === 'Pelayanan Konsumsi' ? 'bg-green-100 text-green-700' :
                          peserta.jenisTugas === 'Pembimbing Ibadah Kloter' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {peserta.jenisTugas}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center font-medium">{peserta.nilaiAdm}</td>
                      <td className="px-4 py-3 text-center font-medium">{peserta.nilaiCat.toFixed(1)}</td>
                      <td className="px-4 py-3 text-center font-bold text-black-800">{peserta.nilaiTotal.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 border-t border-gray-200 shrink-0">
          <p className="text-center text-xs text-gray-500">
            Kantor Kementerian Haji dan Umrah Kota Gorontalo &copy; 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PengumumanSeleksi;
