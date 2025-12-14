export const Add_product = () => {
    return (
        <>
            {/* CONTENT */}
            <div className="col-lg-10 p-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card shadow-sm p-4">
                            <h3 className="mb-4 text-center">Tambah Barang Baru</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nama_barang" className="form-label">
                                        Nama Barang
                                    </label>
                                    <input type="text" className="form-control" id="nama_barang" required="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="harga" className="form-label">
                                        Harga
                                    </label>
                                    <input type="number" className="form-control" id="harga" required="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stok" className="form-label">
                                        Stok
                                    </label>
                                    <input type="number" className="form-control" id="stok" required="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stok" className="form-label">
                                        Foto produk
                                    </label>
                                    <input type="file" className="form-control" id="file" required="" />
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
